import { CreatGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Genero[]>;
    findOne(id: string): Promise<Genero>;
    Create(CreatTableDto: CreatGeneroDto): Promise<Genero>;
    handleError(error: Error): any;
    update(id: string, dto: UpdateGeneroDto): Promise<Genero>;
    delete(id: string): Promise<void>;
}
