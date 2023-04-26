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
exports.TypeUsersController = void 0;
const common_1 = require("@nestjs/common");
const typeusers_service_1 = require("./typeusers.service");
const typeuser_entity_1 = require("./typeuser.entity/typeuser.entity");
let TypeUsersController = class TypeUsersController {
    constructor(service) {
        this.service = service;
    }
    getAll(params) {
        return this.service.getTypeUsers();
    }
    get(params) {
        return this.service.getTypeUser(params.id);
    }
    create(typeuser) {
        return this.service.createTypeUser(typeuser);
    }
    update(typeuser) {
        return this.service.updateTypeUser(typeuser);
    }
    deleteTypeUser(params) {
        return this.service.deleteTypeUser(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeuser_entity_1.TypeUserEntity]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeuser_entity_1.TypeUserEntity]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "deleteTypeUser", null);
TypeUsersController = __decorate([
    (0, common_1.Controller)('typeusers'),
    __metadata("design:paramtypes", [typeusers_service_1.TypeUsersService])
], TypeUsersController);
exports.TypeUsersController = TypeUsersController;
//# sourceMappingURL=typeusers.controller.js.map