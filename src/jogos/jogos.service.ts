import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatJogoDto } from './dto/create-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateJogoDto } from './dto/update-jogo.dto';

@Injectable()
export class JogosService {

  constructor (private readonly prisma: PrismaService) {} //chamada do prisma

  findAll(): Promise<Jogo[]> {
  return this.prisma.jogos.findMany()
}

 async findOne(id: string ): Promise<Jogo> {
  const record = await this.prisma.jogos.findUnique({where: { id }})   // <----nome do campo  indicador  na  tabela

  if(!record) {
    throw new NotFoundException(`registro com o id: ${id} não encontrado`);
  }

  return record;
}

  Create(CreatTableDto: CreatJogoDto): Promise<Jogo> {
    const table: Jogo = {...CreatTableDto}
    return this.prisma.jogos.create({
      data: table,
    }).catch(this.handleError);

  }
  handleError(error: Error) {
    console.log(error);
    return undefined
  }

  async update(id: string, dto: UpdateJogoDto): Promise<Jogo> {
  await this.findOne(id);

  const data: Partial<Jogo>= {...dto}
  return this.prisma.jogos.update({
    data,
    where: { id },
  });
  }

   async delete(id: string){
     await this.findOne(id);
    await this.prisma.jogos.delete({
      where:{ id },
    });
  }
}
