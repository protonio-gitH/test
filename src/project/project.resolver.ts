import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateProjectInput } from './create-project.input.js';
import { Project } from './project.model.js';
import { ProjectService } from './project.service.js';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  async createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ): Promise<Project> {
    return await this.projectService.create(createProjectInput);
  }
}
