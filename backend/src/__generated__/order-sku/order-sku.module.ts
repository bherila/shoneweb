/**
 * This file is generated. Do not modify it manually.
 *
 * @generated Codelock<<YNXNgQlqCD/ITtaJLRqA5FkXjlRddP5e>>
 */

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { OrderSkusRepository } from './order-sku.repository'
import { OrderSkusResolver } from './order-sku.resolver'
import { OrderSkusService } from './order-sku.service'
import { OrderSku } from './order-sku.entity'

@Module({
  imports: [TypeOrmModule.forFeature([OrderSku, OrderSkusRepository])],
  providers: [OrderSkusService, OrderSkusResolver],
})
export class OrderSkusModule {}
