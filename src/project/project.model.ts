import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Skill } from '../skills/skills.model.js';

@ObjectType()
export class Project {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  url: string[];

  @Field(() => Int, { nullable: true })
  profileId: number | null;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
