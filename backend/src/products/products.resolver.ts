import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AuthGuard } from '../common/auth.guards'
import { PaginationQueryDto } from '../common/dto/pagination-query.dto'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './entities/product.entity'
import { ProductsService } from './products.service'

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => Product, { nullable: true })
  product(@Args('productId') productId: string) {
    return this.productsService.findOne(productId)
  }

  @Query(() => [Product])
  products(
    @Args('paginationQuery') paginationQuery: PaginationQueryDto,
  ): Promise<Product[]> {
    return this.productsService.findAll(paginationQuery)
  }

  @Query(() => [Product])
  @UseGuards(new AuthGuard())
  myProducts(
    @Context('user') user,
    @Args('paginationQuery') paginationQuery: PaginationQueryDto,
  ): Promise<Product[]> {
    return this.productsService.findByUser(paginationQuery, user.id)
  }

  @Query(() => [Product])
  @UseGuards(new AuthGuard())
  brandProducts(
    @Context('user') user,
    @Args('brandId') brandId: string,
    @Args('paginationQuery') paginationQuery: PaginationQueryDto,
  ): Promise<Product[]> {
    return this.productsService.findByBrand(paginationQuery, brandId, user.id)
  }

  @Query(() => [Product])
  @UseGuards(new AuthGuard())
  showProducts(
    @Context('user') user,
    @Args('showId') showId: string,
    @Args('paginationQuery') paginationQuery: PaginationQueryDto,
  ): Promise<Product[]> {
    return this.productsService.findByShow(paginationQuery, showId, user.id)
  }

  @Mutation(() => Product)
  @UseGuards(new AuthGuard())
  async addProduct(
    @Context('user') user,
    @Args('data') data: CreateProductDto,
  ) {
    return await this.productsService.create(data, user.id)
  }

  @Mutation(() => Product)
  @UseGuards(new AuthGuard())
  async update_product(@Args('data') data: UpdateProductDto) {
    return await this.productsService.update(data)
  }
}
