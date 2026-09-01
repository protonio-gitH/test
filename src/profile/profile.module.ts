import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';
import { DataBaseModule } from "../database/database.module.js";


@Module({
	imports: [DataBaseModule],
  providers: [ProfileService, ProfileResolver]
})
export class ProfileModule {}
