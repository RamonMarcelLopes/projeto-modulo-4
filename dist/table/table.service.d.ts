import { CreatTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TableService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Table[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TableClient<import(".prisma/client").Table>;
    Create(CreatTableDto: CreatTableDto): Promise<Table>;
}
