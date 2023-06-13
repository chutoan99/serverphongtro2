import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/modules/post/schema/post.schema';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  phone: string;

  @Field()
  zalo: string;

  @Field(() => Post)
  post: Post;

  @Field()
  avatar: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
