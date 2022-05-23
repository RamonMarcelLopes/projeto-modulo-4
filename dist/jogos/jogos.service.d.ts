import { CreatJogoDto } from './dto/create-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Jogo[]>;
    findOne(id: string): Promise<Jogo>;
    Create(CreatTableDto: CreatJogoDto): Promise<Jogo>;
    handleError(error: Error): any;
    update(id: string, dto: UpdateJogoDto): Promise<Jogo>;
    delete(id: string): Promise<void>;
}
