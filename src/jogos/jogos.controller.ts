import { Controller, Post, Get, Body, Param, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { CreatJogoDto } from './dto/create-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { ApiTags ,ApiOperation } from '@nestjs/swagger';

@Controller('jogos')
export class JogosController {

constructor(private JogosService: JogosService) {}

@ApiTags('jogos')
@ApiOperation({
  summary: 'Listar todas os jogos',
})
  @Get()
  findAll(): Promise<Jogo[]> {
    return this.JogosService.findAll();
  }
  @ApiTags('jogos')
  @ApiOperation({
    summary: 'Listar uma jogo pelo seu ID',
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise <Jogo> {   //<-----antigo  req.params.id
  return this.JogosService.findOne(id);
}

  @ApiTags('jogos')
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  @Post()
    Create(@Body() CreatJogoDto: CreatJogoDto): Promise<Jogo> {
      return this.JogosService.Create(CreatJogoDto)
    }

    @ApiTags('jogos')
    @ApiOperation({
      summary: 'Atualizar um jogo  pelo seu ID',
    })
    @Patch(":id")
    update(@Param("id") id: string, @Body() dto: UpdateJogoDto): Promise<Jogo> {
      return this.JogosService.update(id, dto)
    }

    @ApiTags('jogos')
    @Delete(":id")
    @ApiOperation({
      summary: 'Deletar um jogo pelo seu ID',
    })
    @HttpCode(HttpStatus.NO_CONTENT)
       delete(@Param("id") id: string) {
        return this.JogosService.delete(id)

    }

}
