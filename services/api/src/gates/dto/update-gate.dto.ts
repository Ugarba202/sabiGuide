import { GateType } from '@sabiguide/shared-types';

export class UpdateGateDto {
  currentGate?: GateType;
  completedGates?: GateType[];
}
