import { JogosService } from './jogos.service';
import { CreatJogoDto } from './dto/create-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosController {
    private JogosService;
    constructor(JogosService: JogosService);
    findAll(): Promise<Jogo[]>;
    findOne(id: string): Promise<Jogo>;
    Create(CreatJogoDto: CreatJogoDto): Promise<Jogo>;
    update(id: string, dto: UpdateJogoDto): Promise<Jogo>;
    delete(id: string): Promise<void>;
}
