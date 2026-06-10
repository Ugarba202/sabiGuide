import { Injectable } from '@nestjs/common';
import { GateState } from '@prisma/client';
import { UpdateGateDto } from './dto/update-gate.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GatesService {
  constructor(private prisma: PrismaService) {}

  async getGateState(userId: string): Promise<GateState> {
    let state = await this.prisma.gateState.findUnique({ where: { userId } });
    if (!state) {
      // Create default state
      state = await this.prisma.gateState.create({
        data: {
          userId,
          currentGate: 'JAMB',
          completedGates: [],
        },
      });
    }
    return state;
  }

  async updateGateState(userId: string, updateGateDto: UpdateGateDto): Promise<GateState> {
    return this.prisma.gateState.upsert({
      where: { userId },
      update: updateGateDto,
      create: {
        userId,
        currentGate: updateGateDto.currentGate || 'JAMB',
        completedGates: updateGateDto.completedGates || [],
      },
    });
  }
}
