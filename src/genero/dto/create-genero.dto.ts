import { IsString, IsNotEmpty } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreatGeneroDto{
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "criar genero",
    example: `{

     "nome": corrida

    } `
  })


  nome: string

}
