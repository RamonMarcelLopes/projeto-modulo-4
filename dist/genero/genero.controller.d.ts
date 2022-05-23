import { GeneroService } from './genero.service';
import { CreatGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entity';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroController {
    private GeneroService;
    constructor(GeneroService: GeneroService);
    findAll(): Promise<Genero[]>;
    findOne(id: string): Promise<Genero>;
    Create(CreatGeneroDto: CreatGeneroDto): Promise<Genero>;
    update(id: string, dto: UpdateGeneroDto): Promise<Genero>;
    delete(id: string): Promise<void>;
}
