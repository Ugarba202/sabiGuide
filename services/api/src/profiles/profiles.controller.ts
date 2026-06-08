import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get(':userId')
  findByUserId(@Param('userId') userId: string) {
    return this.profilesService.findByUserId(userId);
  }

  @Patch(':userId')
  update(@Param('userId') userId: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(userId, updateProfileDto);
  }
}
