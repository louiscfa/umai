"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorysModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categorys_service_1 = require("./categorys.service");
const categorys_controller_1 = require("./categorys.controller");
const category_entity_1 = require("./category.entity/category.entity");
const produits_module_1 = require("../produits/produits.module");
let CategorysModule = class CategorysModule {
};
CategorysModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.CategoryEntity]), produits_module_1.ProduitsModule],
        providers: [categorys_service_1.CategorysService],
        controllers: [categorys_controller_1.CategorysController]
    })
], CategorysModule);
exports.CategorysModule = CategorysModule;
//# sourceMappingURL=categorys.module.js.map