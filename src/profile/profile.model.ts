import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Experience } from '../experience/experience.model.js';
import { Project } from '../project/project.model.js';
import { Skill } from '../skills/skills.model.js';

@ObjectType()
export class Profile {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  links: string[];

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];

  @Field(() => [Project])
  projects: Project[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}