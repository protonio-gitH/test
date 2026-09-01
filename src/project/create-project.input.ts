import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  url: string[];

  @Field(() => Int, { nullable: true })
  profileId?: number;

  @Field(() => [Int], { nullable: true })
  skillIds?: number[];
}
