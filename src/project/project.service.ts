import { Injectable } from '@nestjs/common';
import { DataBaseService } from '../database/database.service.js';
import { CreateProjectInput } from './create-project.input.js';

@Injectable()
export class ProjectService {
  constructor(private readonly databaseService: DataBaseService) {}

  async create(createProjectInput: CreateProjectInput) {
    const { name, description, url, profileId, skillIds } = createProjectInput;

    return this.databaseService.project.create({
      data: {
        name,
        description,
        url,
        profile: profileId
        ? {
            connect: { id: profileId },
          }
        : undefined,

      skills: skillIds?.length
        ? {
            connect: skillIds.map((id) => ({ id })),
          }
        : undefined,
      },
      include: {
        skills: true,
        profile: true,
      },
    });
  }
}