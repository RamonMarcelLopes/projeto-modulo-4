import { TableService } from './table.service';
import { CreatTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
export declare class TableController {
    private tableService;
    constructor(tableService: TableService);
    findAll(): Promise<Table[]>;
    Create(CreatTableDto: CreatTableDto): Promise<Table>;
}
