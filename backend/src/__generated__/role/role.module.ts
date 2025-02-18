/**
 * This file is generated. Do not modify it manually.
 *
 * @generated Codelock<<Bk7whL6y4LmbTAFcXjjuu87c06gvjpjV>>
 */

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { RolesRepository } from './role.repository'
import { RolesResolver } from './role.resolver'
import { RolesService } from './role.service'
import { Role } from './role.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Role, RolesRepository])],
  providers: [RolesService, RolesResolver],
})
export class RolesModule {}
