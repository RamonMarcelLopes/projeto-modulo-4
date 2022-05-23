import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService]  /* libera para chamar o banco em toda a aplicação */
})
export class PrismaModule {}
