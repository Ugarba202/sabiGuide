import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { CreateConversationDto } from './dto/create-conversation.dto';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Post(':userId')
  saveMessage(@Param('userId') userId: string, @Body() createConversationDto: CreateConversationDto) {
    return this.conversationsService.saveMessage(userId, createConversationDto);
  }

  @Get(':userId')
  getHistory(@Param('userId') userId: string) {
    return this.conversationsService.getHistory(userId);
  }
}
