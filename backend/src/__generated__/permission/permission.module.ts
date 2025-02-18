/**
 * This file is generated. Do not modify it manually.
 *
 * @generated Codelock<<RcPn5+3epmxKJWKv6qrp9GJvxEZsQCBU>>
 */

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PermissionsRepository } from './permission.repository'
import { PermissionsResolver } from './permission.resolver'
import { PermissionsService } from './permission.service'
import { Permission } from './permission.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Permission, PermissionsRepository])],
  providers: [PermissionsService, PermissionsResolver],
})
export class PermissionsModule {}
