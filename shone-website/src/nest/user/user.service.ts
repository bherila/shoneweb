import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import jwt from 'jsonwebtoken'
import Twilio from 'twilio'

import { fileUpload } from '../common/fileUpload/index'
import { message } from '../common/message'
import { User } from './entities/user.entity'
import { UserRepository } from './user.repository'
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}

  async create(phone: string) {
    if (!phone) {
      throw new UnprocessableEntityException(
        `you must create a user with  a phoneNumber`,
      )
    }
    const checkExistUser = await this.userRepository.findOne({ phone })
    let userDetail: User = checkExistUser
    if (!checkExistUser) {
      const newUser = this.userRepository.create({
        phone,
      })
      userDetail = await this.userRepository.save(newUser)
    }
    const code = Math.floor(Math.random() * 999999)
      .toString()
      .padStart(6, '0')
    await this.sendVerificationCode(phone, code)
    this.userRepository.update(userDetail.id, {
      verificationCodeTimeSent: new Date().toUTCString(),
      verificationCode: code,
    })
    return 'code send successfully'
  }

  async sendVerificationCode(phone, code) {
    try {
      const client = Twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN,
      )
      await client.messages.create({
        body: `Your SHONE verification code is ${code}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
      })
      return true
    } catch (error) {
      throw new HttpException(
        'send code faild',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async verifySmsCode(phone, code) {
    let userDetail = await this.findOne({ phone })
    if (!userDetail)
      throw new UnprocessableEntityException(message.userNotExist)
    const currentTime = new Date().toUTCString()
    const findDiff =
      (new Date(currentTime).getTime() -
        new Date(userDetail.verificationCodeTimeSent).getTime()) /
      60000
    if (findDiff > 5)
      throw new HttpException(message.codeExpired, HttpStatus.BAD_REQUEST)
    if (userDetail.verificationCode !== code)
      throw new HttpException(message.wrongCode, HttpStatus.BAD_REQUEST)
    if (userDetail.username) {
      const payload = {
        id: userDetail.id,
        phone,
      }
      const token = await jwt.sign(payload, process.env.JWT_SECRET)
      await this.userRepository.update(userDetail.id, { token })
      userDetail = await this.findOne(userDetail.id)
    }

    return userDetail
  }

  findOne(userId) {
    return this.userRepository.findOne(userId)
  }

  findAll() {
    return this.userRepository.find()
  }

  async update(user: any) {
    const temoData: any = {}
    const checkUserExist = await this.findOne(user.id)
    if (!checkUserExist)
      throw new UnprocessableEntityException(message.userNotExist)
    if (user.username) {
      temoData.username = user.username
      const checkusernameExistsOrNot = await this.findOne(user.username)
      if (checkusernameExistsOrNot)
        throw new UnprocessableEntityException(message.usernameAlreadyExist)
    }
    if (user.email) temoData.email = user.email
    try {
      if (user.file) {
        const profileUrl = await fileUpload(await user.file)
        temoData.profileUrl = profileUrl
      }
      const payload = {
        id: checkUserExist.id,
        phone: checkUserExist.phone,
      }
      const token = await jwt.sign(payload, process.env.JWT_SECRET)
      temoData.token = token
      await this.userRepository.update(user.id, temoData)
      return await this.findOne(user.id)
    } catch (e) {
      return e
    }
  }
}
