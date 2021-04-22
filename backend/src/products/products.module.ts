import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { BrandRepository } from '../brands/brands.repository'
import { Brand } from '../brands/entities/brand.entity'
import { ShowSegment } from '../show-segment/entities/show-segment.entity'
import { ShowSegmentRepository } from '../show-segment/show-segments.repository'
import { User } from '../user/entities/user.entity'
import { UserRepository } from '../user/user.repository'
import { Product } from './entities/product.entity'
import { ProductRepository } from './products.repository'
import { ProductResolver } from './products.resolver'
import { ProductsService } from './products.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Brand,
      Product,
      User,
      ShowSegment,
      BrandRepository,
      ProductRepository,
      ShowSegmentRepository,
      UserRepository,
    ]),
  ],
  providers: [ProductsService, ProductResolver],
})
export class ProductsModule {}
