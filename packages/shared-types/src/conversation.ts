export interface Conversation {
  id: string;
  userId: string;
  messages: Array<{
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
  }>;
  startedAt: Date;
  lastActive: Date;
}
