import { Module } from '@nestjs/common';
import { DataBaseModule } from '../database/database.module.js';
import { ExperienceService } from './experience.service.js';
import { ExperienceResolver } from './experience.resolver.js';

@Module({
  imports: [DataBaseModule],
  providers: [ExperienceService, ExperienceResolver]
})
export class ExperienceModule {}
