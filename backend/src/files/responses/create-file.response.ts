import { ApiProperty } from "@nestjs/swagger";

import { File } from "../../files/entities/file.entity";

export class CreateFileResponse {
  // @ApiProperty() tags are needed on all attributes for OpenAPI
  // otherwise OpenAPI won't get these in autogenerated response
  @ApiProperty({
    description: `our id in our database`,
    example: `b644cec4-0487-4f6f-bac1-c80059a2a4b0`,
    type: "UUID",
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
    description: `currently only files with *public* set to *true*
    return a URL upon creation`,
    example: `https://piki-uploads.s3.us-west-1.amazonaws.com/d00b692e-c6d4-44cf-b0ef-6982a5657c55-favicon.ico`,
    type: "URL",
    required: false,
  })
  public url: string;

  @ApiProperty({
    description: `TEMPORARILY FOR TESTING: for ease of the client,
    we default to a public bucket. this should be changed in production.
    all files default to being stored in a private bucket
    however, public files can be created by passing {public: true} in the body
    these files will immediately return a persistent public URL
    note there is no authorization these files are exposed to the entire web`,
    example: `true`,
  })
  public is_public: boolean;

  @ApiProperty({
    description: `currently only managed by the server,
    only returned when it exists
  tells you if the file has some extra meta data to help identify it
  for example a show has 2 files an image and video preview,
  there are returned with a tag 'image' and 'video' to distinguish them`,
    example: `video`,
    required: false,
  })
  public tag: string;

  constructor(file: File) {
    this.id = file.id;
    if (file.user) {
      this.user_id = file.user.id;
    }
    this.is_public = file.is_public;
    if (file.is_public) {
      this.url = file.url;
    }
    if (file.tag) {
      this.tag = file.tag;
    }
  }
}
