

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGeneroDto} from './dto/update-genero.dto';

@Injectable()
export class GeneroService {

  constructor (private readonly prisma: PrismaService) {} //chamada do prisma

  findAll(): Promise<Genero[]> {
  return this.prisma.genero.findMany()
}

 async findOne(id: string ): Promise<Genero> {
  const record = await this.prisma.genero.findUnique({where: { id }})   // <----nome do campo  indicador  na  tabela

  if(!record) {
    throw new NotFoundException(`registro com o id: ${id} não encontrado`);
  }

  return record;
}

  Create(CreatTableDto: CreatGeneroDto): Promise<Genero> {
    const table: Genero = {...CreatTableDto}
    return this.prisma.genero.create({
      data: table,
    }).catch(this.handleError);

  }
  handleError(error: Error) {
    console.log(error);
    return undefined
  }

  async update(id: string, dto: UpdateGeneroDto): Promise<Genero> {
  await this.findOne(id);

  const data: Partial<Genero>= {...dto}
  return this.prisma.genero.update({
    data,
    where: { id },
  });
  }

   async delete(id: string){
     await this.findOne(id);
    await this.prisma.genero.delete({
      where:{ id },
    });
  }
}
