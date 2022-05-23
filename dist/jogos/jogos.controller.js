"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogosController = void 0;
const common_1 = require("@nestjs/common");
const jogos_service_1 = require("./jogos.service");
const create_jogo_dto_1 = require("./dto/create-jogo.dto");
const update_jogo_dto_1 = require("./dto/update-jogo.dto");
const swagger_1 = require("@nestjs/swagger");
let JogosController = class JogosController {
    constructor(JogosService) {
        this.JogosService = JogosService;
    }
    findAll() {
        return this.JogosService.findAll();
    }
    findOne(id) {
        return this.JogosService.findOne(id);
    }
    Create(CreatJogoDto) {
        return this.JogosService.Create(CreatJogoDto);
    }
    update(id, dto) {
        return this.JogosService.update(id, dto);
    }
    delete(id) {
        return this.JogosService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('jogos'),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar todas os jogos',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiTags)('jogos'),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar uma jogo pelo seu ID',
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiTags)('jogos'),
    (0, swagger_1.ApiOperation)({
        summary: 'Criar um jogo',
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_jogo_dto_1.CreatJogoDto]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "Create", null);
__decorate([
    (0, swagger_1.ApiTags)('jogos'),
    (0, swagger_1.ApiOperation)({
        summary: 'Atualizar um jogo  pelo seu ID',
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_jogo_dto_1.UpdateJogoDto]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiTags)('jogos'),
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({
        summary: 'Deletar um jogo pelo seu ID',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JogosController.prototype, "delete", null);
JogosController = __decorate([
    (0, common_1.Controller)('jogos'),
    __metadata("design:paramtypes", [jogos_service_1.JogosService])
], JogosController);
exports.JogosController = JogosController;
//# sourceMappingURL=jogos.controller.js.map