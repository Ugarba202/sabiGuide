import { Injectable, NotFoundException } from '@nestjs/common';
import { GateType } from '@sabiguide/shared-types';
import { UpdateGateDto } from './dto/update-gate.dto';

export interface GateState {
  userId: string;
  currentGate: GateType;
  completedGates: GateType[];
  updatedAt: Date;
}

@Injectable()
export class GatesService {
  private gateStates: Map<string, GateState> = new Map();

  getGateState(userId: string): GateState {
    const state = this.gateStates.get(userId);
    if (!state) {
      // Default state for a new user
      return {
        userId,
        currentGate: GateType.WAEC,
        completedGates: [],
        updatedAt: new Date(),
      };
    }
    return state;
  }

  updateGateState(userId: string, updateGateDto: UpdateGateDto): GateState {
    const currentState = this.getGateState(userId);
    const updatedState: GateState = {
      ...currentState,
      ...updateGateDto,
      updatedAt: new Date(),
    };
    this.gateStates.set(userId, updatedState);
    return updatedState;
  }
}
