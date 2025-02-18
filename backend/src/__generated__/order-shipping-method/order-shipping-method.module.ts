/**
 * This file is generated. Do not modify it manually.
 *
 * @generated Codelock<<gKhiXEjEcmxStjN2QKrqaHE3TagkolLy>>
 */

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { OrderShippingMethodsRepository } from './order-shipping-method.repository'
import { OrderShippingMethodsResolver } from './order-shipping-method.resolver'
import { OrderShippingMethodsService } from './order-shipping-method.service'
import { OrderShippingMethod } from './order-shipping-method.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderShippingMethod,
      OrderShippingMethodsRepository,
    ]),
  ],
  providers: [OrderShippingMethodsService, OrderShippingMethodsResolver],
})
export class OrderShippingMethodsModule {}
