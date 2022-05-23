import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogosModule } from './jogos/jogos.module'
import { PrismaModule } from './prisma/prisma.module';
import { GeneroModule } from './genero/genero.module';

@Module({
  imports: [JogosModule, PrismaModule, GeneroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
