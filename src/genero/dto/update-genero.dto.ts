import { PartialType } from "@nestjs/swagger";
import { CreatGeneroDto } from "./create-genero.dto";

export class UpdateGeneroDto extends PartialType(CreatGeneroDto) {}
