import { Module } from '@nestjs/common';
import { DataBaseModule } from '../database/database.module.js';
import { ProjectService } from './project.service.js';
import { ProjectResolver } from './project.resolver.js';

@Module({
  imports: [DataBaseModule],
  providers: [ProjectService, ProjectResolver]
})
export class ProjectModule {}
