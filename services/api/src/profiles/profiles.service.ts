import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

// Shared type mock for now
export interface Profile {
  id: string;
  userId: string;
  courseInterest: string;
  state: string;
  institutionPreference: string[];
  createdAt: Date;
}

@Injectable()
export class ProfilesService {
  private profiles: Profile[] = [];

  create(createProfileDto: CreateProfileDto): Profile {
    const newProfile: Profile = {
      id: Math.random().toString(36).substring(7),
      userId: createProfileDto.userId,
      courseInterest: createProfileDto.courseInterest,
      state: createProfileDto.state,
      institutionPreference: createProfileDto.institutionPreference,
      createdAt: new Date(),
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  findByUserId(userId: string): Profile {
    const profile = this.profiles.find(p => p.userId === userId);
    if (!profile) {
      throw new NotFoundException(`Profile for user ${userId} not found`);
    }
    return profile;
  }

  update(userId: string, updateProfileDto: UpdateProfileDto): Profile {
    const profile = this.findByUserId(userId);
    const updatedProfile = { ...profile, ...updateProfileDto };
    this.profiles = this.profiles.map(p => p.userId === userId ? updatedProfile : p);
    return updatedProfile;
  }
}
