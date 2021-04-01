import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express/multer";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Express } from "express";

import { PaginationQueryDto } from "../common/dto/pagination-query.dto";
import { CreateFileDto } from "../files/dto/create-file.dto";
import { CreateFileResponse } from "../files/responses/create-file.response";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserResponse } from "./responses/user.response";
import { UsersService } from "./users.service";

@ApiTags("users")
@Controller("users")
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth('JWT')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: `returns all users` })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `success`,
    type: UserResponse,
    isArray: true,
  })
  @Get()
  async findAll(
    @Query() paginationQuery: PaginationQueryDto
  ): Promise<UserResponse[]> {
    return this.usersService
      .findAll(paginationQuery)
      .then((users) => users.map((user) => new UserResponse(user)));
  }

  @ApiOperation({ summary: `returns a single user by their id` })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `success`,
    type: UserResponse,
  })
  @Get(":id")
  async findOne(@Param("id") id: string): Promise<UserResponse> {
    return this.usersService.findOne(id).then((user) => new UserResponse(user));
  }

  @ApiOperation({ summary: `creates a new user given unique fields` })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `created user and any associated addresses passed`,
    type: UserResponse,
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponse> {
    return this.usersService
      .create(createUserDto)
      .then((user) => new UserResponse(user));
  }

  // todo: should we make username immutable?
  @ApiOperation({ summary: `updates a user, eg their address` })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `updated user`,
    type: UserResponse,
  })
  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService
      .update(id, updateUserDto)
      .then((user) => new UserResponse(user));
  }

  @ApiOperation({
    summary: `hard deletes a user, cascading...probably should never use in
    production; will switch to soft delete`,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `deleted user`,
    type: UserResponse,
  })
  @Delete(":id")
  async remove(@Param("id") id: string): Promise<UserResponse> {
    return this.usersService.remove(id).then((user) => new UserResponse(user));
  }

  @ApiOperation({
    summary: `adds the single profile image for the user
  will override if a new avatar image uploaded`,
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `uploaded avatar image`,
    type: CreateFileResponse,
  })
  // todo get the file part into the docs for these
  // the file part is missing in the request body
  @Post("avatar")
  @UseInterceptors(FileInterceptor("file"))
  async addAvatar(
    @Body() CreateFileDto: CreateFileDto,
    @UploadedFile() file: Express.Multer.File
  ): Promise<CreateFileResponse> {
    return this.usersService
      .addAvatar(CreateFileDto, file.buffer, file.originalname)
      .then((file) => new CreateFileResponse(file));
  }

  @ApiOperation({
    summary: `removes the single profile image for the user
  (profile image is optional)`,
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: `deleted avatar image`,
  })
  @Delete(":userId/avatar")
  @HttpCode(204)
  async deleteAvatar(@Param("userId") userId: string) {
    return this.usersService.deleteAvatar(userId);
  }
}
