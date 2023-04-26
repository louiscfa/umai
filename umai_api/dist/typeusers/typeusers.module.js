"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeusers_service_1 = require("./typeusers.service");
const typeusers_controller_1 = require("./typeusers.controller");
const typeuser_entity_1 = require("./typeuser.entity/typeuser.entity");
let TypeUsersModule = class TypeUsersModule {
};
TypeUsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([typeuser_entity_1.TypeUserEntity])],
        providers: [typeusers_service_1.TypeUsersService],
        controllers: [typeusers_controller_1.TypeUsersController]
    })
], TypeUsersModule);
exports.TypeUsersModule = TypeUsersModule;
//# sourceMappingURL=typeusers.module.js.map