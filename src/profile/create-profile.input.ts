import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  links: string[];

  @Field(() => [Int], { nullable: true })
  skillIds?: number[];

  @Field(() => [Int], { nullable: true })
  experienceIds?: number[];

  @Field(() => [Int], { nullable: true })
  projectIds?: number[];
}
