import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // await this.$connect(); // Commented out to allow server startup without DB
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
