import { GateType } from "./gate";

export type Language = "en" | "pidgin" | "ha" | "yo" | "ig";

export interface User {
  id: string;
  fullName: string;
  phoneNumber: string;
  state: string;
  language: Language;
  currentGate: GateType;
  createdAt: Date;
}
