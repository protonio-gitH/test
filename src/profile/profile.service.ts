import { Injectable, NotFoundException } from '@nestjs/common';
import { DataBaseService } from '../database/database.service.js';
import { CreateProfileInput } from './create-profile.input.js';

@Injectable()
export class ProfileService {
  constructor(private readonly db: DataBaseService) {}

  async getProfile() {
    const profile = await this.db.profile.findFirst({
      include: {
        skills: true,
        experience: true,
        projects: {
          include: {
            skills: true,
          },
        },
      },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }

  async createProfile(createProfileInput: CreateProfileInput) {
    const { name, description, links, skillIds, experienceIds, projectIds } = createProfileInput;
    return this.db.profile.create({
      data: { name, description, links, skills: skillIds?.length
        ? {
            connect: skillIds.map((id) => ({ id })),
          }
        : undefined,
      experience: experienceIds?.length
        ? {
            connect: experienceIds.map((id) => ({ id })),
          }
        : undefined,
      projects: projectIds?.length
        ? {
            connect: projectIds.map((id) => ({ id })),
          }
        : undefined, },
      include: {
        skills: true,
        experience: true,
        projects: {
          include: {
            skills: true,
          },
        },
      },
    });
  }
}