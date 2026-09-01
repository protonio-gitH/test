import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSkillInput } from './create-skill.input.js';
import { Skill } from './skills.model.js';
import { SkillsService } from './skills.service.js';

@Resolver(() => Skill)
export class SkillsResolver {
  constructor(private readonly skillsService: SkillsService) {}

  @Mutation(() => Skill)
  async createSkill(
    @Args('createSkillInput') createSkillInput: CreateSkillInput,
  ): Promise<Skill> {
    return await this.skillsService.create(createSkillInput);
  }
}
