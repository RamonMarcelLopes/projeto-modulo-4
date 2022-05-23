import { PartialType } from "@nestjs/swagger";
import { CreatJogoDto } from "./create-jogo.dto";

export class UpdateJogoDto extends PartialType(CreatJogoDto) {}
