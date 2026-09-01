import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Profile } from './profile.model.js';
import { ProfileService } from './profile.service.js';
import { CreateProfileInput } from './create-profile.input.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
  ) {}

  @Query(() => Profile)
  async profile(): Promise<Profile> {
    return this.profileService.getProfile();
  }

  @Mutation(() => Profile)
  async createProfile(@Args('createProfileInput') createProfileInput: CreateProfileInput): Promise<Profile> {
    return this.profileService.createProfile(createProfileInput);
  }
}