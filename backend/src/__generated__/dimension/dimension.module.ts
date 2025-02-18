/**
 * This file is generated. Do not modify it manually.
 *
 * @generated Codelock<<Pt145wI7/YpmewY/U0xaYIHok/hPCGa6>>
 */

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { DimensionsRepository } from './dimension.repository'
import { DimensionsResolver } from './dimension.resolver'
import { DimensionsService } from './dimension.service'
import { Dimension } from './dimension.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Dimension, DimensionsRepository])],
  providers: [DimensionsService, DimensionsResolver],
})
export class DimensionsModule {}
