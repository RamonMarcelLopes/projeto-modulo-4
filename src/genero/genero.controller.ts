import { Controller, Post, Get, Body, Param, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreatGeneroDto} from './dto/create-genero.dto';
import { Genero } from './entities/genero.entity';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('genero')
export class GeneroController {

constructor(private GeneroService: GeneroService) {}

@ApiTags('genero')
@ApiOperation({
  summary: 'Listar todas os generos ',
})
  @Get()
  findAll(): Promise<Genero[]> {
    return this.GeneroService.findAll();
  }
  @ApiTags('genero')
  @ApiOperation({
    summary: 'Listar um genero  pelo seu ID',
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise <Genero> {   //<-----antigo  req.params.id
  return this.GeneroService.findOne(id);
}
@ApiTags('genero')
@ApiOperation({
  summary: 'Criar um genero ',
})
  @Post()
    Create(@Body() CreatGeneroDto: CreatGeneroDto): Promise<Genero> {
      return this.GeneroService.Create(CreatGeneroDto)
    }
    @ApiTags('genero')
    @ApiOperation({
      summary: 'Atualizar um genero pelo seu ID',
    })
    @Patch(":id")
    update(@Param("id") id: string, @Body() dto: UpdateGeneroDto): Promise<Genero> {
      return this.GeneroService.update(id, dto)
    }
    @ApiTags('genero')
    @ApiOperation({
      summary: 'Deletar uma genero pelo seu ID',
    })
    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
       delete(@Param("id") id: string) {
        return this.GeneroService.delete(id)

    }

}
