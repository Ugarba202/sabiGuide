import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';

export interface ConversationState {
  userId: string;
  lastMessage: string;
  context: string;
  updatedAt: Date;
}

@Injectable()
export class ConversationsService {
  private conversations: Map<string, ConversationState> = new Map();

  saveMessage(userId: string, createConversationDto: CreateConversationDto): ConversationState {
    const newState: ConversationState = {
      userId,
      lastMessage: createConversationDto.lastMessage,
      context: createConversationDto.context,
      updatedAt: new Date(),
    };
    this.conversations.set(userId, newState);
    return newState;
  }

  getHistory(userId: string): ConversationState {
    return this.conversations.get(userId) || {
      userId,
      lastMessage: '',
      context: '',
      updatedAt: new Date(),
    };
  }
}
