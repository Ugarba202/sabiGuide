import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    return this.prisma.profile.create({
      data: {
        userId: createProfileDto.userId,
        courseInterest: createProfileDto.courseInterest,
        state: createProfileDto.state,
        institutionPreference: createProfileDto.institutionPreference,
      },
    });
  }

  async findByUserId(userId: string): Promise<Profile> {
    const profile = await this.prisma.profile.findUnique({ where: { userId } });
    if (!profile) {
      throw new NotFoundException(`Profile for user ${userId} not found`);
    }
    return profile;
  }

  async update(userId: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    return this.prisma.profile.update({
      where: { userId },
      data: updateProfileDto,
    });
  }
}
