import { Injectable } from '@nestjs/common';
import { DataBaseService } from '../database/database.service.js';
import { CreateSkillInput } from './create-skill.input.js';
import { Skill } from './skills.model.js';

@Injectable()
export class SkillsService {
  constructor(private readonly databaseService: DataBaseService) {}

  async create(createSkillInput: CreateSkillInput): Promise<Skill> {
    return this.databaseService.skill.create({
      data: {
        skill: createSkillInput.skill,
      },
    });
  }
}
