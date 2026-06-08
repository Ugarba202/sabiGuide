import { GateType } from "./gate";

export interface DocumentChecklist {
  id: string;
  userId: string;
  gate: GateType;
  title: string;
  completed: boolean;
  requiredForNextStage: boolean;
}
