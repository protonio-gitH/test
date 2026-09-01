import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => Int)
  id: number;

  @Field()
  skill: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
