import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { GatesModule } from './gates/gates.module';
import { ConversationsModule } from './conversations/conversations.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { UssdModule } from './ussd/ussd.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, UsersModule, ProfilesModule, GatesModule, ConversationsModule, WhatsappModule, UssdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
