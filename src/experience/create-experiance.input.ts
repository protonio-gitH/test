import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateExperienceInput {
  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  description: string;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;

  @Field(() => Int, { nullable: true })
  profileId?: number;
}
