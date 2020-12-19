import {
  CreateSimpleProductResponse,
} from 'src/simple-products/responses/create-simple-product.response';

import { ApiProperty } from '@nestjs/swagger';

import { CreateFileResponse } from '../../files/responses/create-file.response';
import { Show } from '../entities/show.entity';

export class CreateShowResponse {
  // @ApiProperty() tags are needed on all attributes for OpenAPI
  // otherwise OpenAPI won't get these in autogenerated response
  @ApiProperty({
    description: `our id in our database`,
    example: `b644cec4-0487-4f6f-bac1-c80059a2a4b0`,
    type: 'UUID',
  })
  public id: string;
  @ApiProperty({
    description: `the id of the user who uploaded this file
          we need this user id to associate the user so we can
          1. let only this user delete the file
          2. be able to return all this users files for them to manage`,
    example: `cus_IPqRS333voIGbS`,
  })
  public user_id: string;

  @ApiProperty({
    description: `the display description for customers,
    this should entice users to check out the show`,
    example: `The coolest host with the coolest products will show you
    everything you've been dying to purchase this season`,
  })
  public description: string;

  @ApiProperty({
    description: `show name`,
    example: `The Ski Show - New Ski Bindings Edition`,
  })
  public name: string;

  @ApiProperty({
    description: `the time that the show is scheduled to start at
    (it's a datetime, format https://en.wikipedia.org/wiki/ISO_8601)`,
    example: `2020-11-22T20:39:12+00:00`,
  })
  public scheduled_start: Date;

  @ApiProperty({
    description: `the time that the show is scheduled to end at
    (it's a datetime, format https://en.wikipedia.org/wiki/ISO_8601)`,
    example: `2020-11-22T21:39:12+00:00`,
  })
  public scheduled_end: Date;

  @ApiProperty({
    description: `the video and photo preview for the show are here`,
    isArray: true,
    type: CreateFileResponse,
  })
  public files: CreateFileResponse[];

  @ApiProperty({
    description: `the simpleProducts associated with the show
    for sale during the show`,
    isArray: true,
    type: CreateSimpleProductResponse,
  })
  public simpleProducts: CreateSimpleProductResponse[];

  constructor(show: Show) {
    this.id = show.id;
    if (show.user) {
      this.user_id = show.user.id;
    }
    this.description = show.description;
    this.name = show.name;
    this.scheduled_start = show.scheduled_start;
    this.scheduled_end = show.scheduled_end;
    this.files = show.files.map(file => new CreateFileResponse(file));
    if (show.simpleProducts) {
      this.simpleProducts = show.simpleProducts.map(
        simpleProduct => new CreateSimpleProductResponse(simpleProduct),
      );
    }
  }
}
