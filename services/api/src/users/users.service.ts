import { Injectable, NotFoundException } from '@nestjs/common';
import { User, GateType } from '@sabiguide/shared-types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: Math.random().toString(36).substring(7),
      fullName: createUserDto.fullName,
      phoneNumber: createUserDto.phone,
      state: '',
      language: createUserDto.language,
      currentGate: GateType.WAEC,
      createdAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findOne(id: string): User {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);
    const updatedUser = { ...user, ...updateUserDto };
    this.users = this.users.map(u => u.id === id ? updatedUser : u);
    return updatedUser;
  }
}
