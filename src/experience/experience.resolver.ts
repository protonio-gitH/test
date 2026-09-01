import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Experience } from './experience.model.js';
import { ExperienceService } from './experience.service.js';
import { CreateExperienceInput } from './create-experiance.input.js';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @Mutation(() => Experience)
  async createExperience(@Args('createExperienceInput') createExperienceInput: CreateExperienceInput) {
    return this.experienceService.create(createExperienceInput);
  }
}
