import { Module } from '@nestjs/common';
import { DataBaseModule } from '../database/database.module.js';
import { SkillsService } from './skills.service.js';
import { SkillsResolver } from './skills.resolver.js';

@Module({
  imports: [DataBaseModule],
  providers: [SkillsService, SkillsResolver]
})
export class SkillsModule {}
