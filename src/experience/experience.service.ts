import { Injectable } from '@nestjs/common';
import { DataBaseService } from '../database/database.service.js';
import { CreateExperienceInput } from './create-experiance.input.js';

@Injectable()
export class ExperienceService {
	constructor(private readonly databaseService: DataBaseService) {}

	async create(createExperienceInput: CreateExperienceInput) {
		const { company, position, description, startDate, endDate, profileId } = createExperienceInput;
		return this.databaseService.experience.create({
			data: { company, position, description, startDate, endDate, profile: profileId
				? {
					connect: { id: profileId },
				  }
				: undefined, },
			include: { profile: true },
		});
	}
}
