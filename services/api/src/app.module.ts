import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { GatesModule } from './gates/gates.module';
import { ConversationsModule } from './conversations/conversations.module';

@Module({
  imports: [UsersModule, ProfilesModule, GatesModule, ConversationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
