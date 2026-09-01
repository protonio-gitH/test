import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSkillInput {
  @Field()
  skill: string;
}
