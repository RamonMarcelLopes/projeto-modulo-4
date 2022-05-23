import { IsPositive, IsNumber, IsString, IsNotEmpty } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreatJogoDto{
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: "criar um jogo",
    example: `{

     "nome": GTAV,
     "ano": 2022

    } `
  })
  ano: number

  @IsNotEmpty()
  @IsString()
  nome: string


}
