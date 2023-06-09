import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RegisterResponse {
  @Field((type) => Int)
  err: number;

  @Field()
  msg: string;

  @Field({ nullable: true })
  token: string;
}
