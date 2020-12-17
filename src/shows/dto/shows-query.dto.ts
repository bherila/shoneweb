import { IsDateString, IsOptional, IsString } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

export class ShowsQueryDto extends PartialType(PaginationQueryDto) {
  @ApiProperty({
    description: `this is the user who created the show`,
    example: `cus_IPqRS333voIGbS`,
  })
  @IsOptional()
  @IsString()
  readonly user_id?: string;

  // TODO: start date and end date both need validation
  // that if one is present both need to be present
  // or update the code to retur all after date or all before date
  // also there is no logical validation on the dates to show start and end
  @ApiProperty({
    description: `earlierst start date-time of show to query INCLUSIVE
     https://en.wikipedia.org/wiki/ISO_8601
     note this currently has no logical validation eg that format is correct
     that date is reasonable, that start is before end, that is a TODO, so for now please use carefully
     it is actually optional - seems showed required by bug`,
    example: `2020-11-22T20:39:12+00:00`,
  })
  @IsOptional()
  @IsDateString()
  readonly start_date?: string;

  // TODO: start date and end date both need validation
  // that if one is present both need to be present
  // or update the code to retur all after date or all before date
  // also there is no logical validation on the dates to show start and end
  @ApiProperty({
    description: `latest start date-time of show to query INCLUSIVE
     https://en.wikipedia.org/wiki/ISO_8601
     note this currently has no logical validation eg that format is correct
     that date is reasonable, that start is before end, that is a TODO, so for now please use carefully
     it is actually optional - seems showed required by bug`,
    example: `2020-11-22T20:39:12+00:00`,
  })
  @IsOptional()
  @IsDateString()
  readonly end_date?: string;
}
