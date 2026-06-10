import { Injectable } from '@nestjs/common';
import { Conversation } from '@prisma/client';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConversationsService {
  constructor(private prisma: PrismaService) {}

  async saveMessage(userId: string, createConversationDto: CreateConversationDto): Promise<Conversation> {
    return this.prisma.conversation.upsert({
      where: { userId },
      update: {
        lastMessage: createConversationDto.lastMessage,
        context: createConversationDto.context,
      },
      create: {
        userId,
        lastMessage: createConversationDto.lastMessage,
        context: createConversationDto.context,
      },
    });
  }

  async getHistory(userId: string): Promise<Conversation | null> {
    return this.prisma.conversation.findUnique({ where: { userId } });
  }
}
