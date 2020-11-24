import { IsNumber, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateSkuDto {
  @ApiProperty({
    description: `the id of the product associated with the SKU
    every SKU must currently belong to a product
    this follows the pattern of Stipe, which processes all the unit sales`,
    example: `prod_I7NzQjrlgEJ9ZG`,
  })
  @IsString()
  readonly product: string;

  @ApiProperty({
    description: `the id of the show that the SKU is being sold in
    making SKUs unique to shows controls the quantity and the price
    for that show`,
    example: `1`,
  })
  @IsNumber()
  readonly show: number;

  @ApiProperty({
    description: `price of the item in cents eg a price of $1 is 100`,
    example: `100`,
  })
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    description: `any descriptive details that it permutes on
    eg {"size": "medium", "gender": "unisex"}`,
    example: `{"size": "medium"}`,
  })
  @IsOptional()
  @IsString()
  readonly attributes: string;

  @ApiProperty({
    description: `the quantity at the start of the show,
    this does not get updated as the show goes on
    there is a different field for the current quantity
    called current_quantity. (This is managed by the server based on sales.)`,
    example: `100`,
  })
  @IsNumber()
  readonly quantity: number;
}
