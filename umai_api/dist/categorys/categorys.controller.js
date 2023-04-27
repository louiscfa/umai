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
exports.CategorysController = void 0;
const common_1 = require("@nestjs/common");
const categorys_service_1 = require("./categorys.service");
const category_entity_1 = require("./category.entity/category.entity");
const passport_1 = require("@nestjs/passport");
let CategorysController = class CategorysController {
    constructor(service) {
        this.service = service;
    }
    getAll(params) {
        return this.service.getCategorys();
    }
    get(params) {
        return this.service.getCategory(params.id);
    }
    getChilds(params) {
        return this.service.getCategoryChilds(params.id);
    }
    getAllChilds(params) {
        return this.service.getAllCategoryChilds(params.id);
    }
    getProducts(params) {
        return this.service.getCategoryProducts(params.id);
    }
    getChildsProducts(params) {
        return this.service.getChildsCategoryProducts(params.id);
    }
    create(product) {
        return this.service.createCategory(product);
    }
    update(product) {
        return this.service.updateCategory(product);
    }
    deleteUser(params) {
        return this.service.deleteCategory(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id/childs'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "getChilds", null);
__decorate([
    (0, common_1.Get)(':id/allchilds'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "getAllChilds", null);
__decorate([
    (0, common_1.Get)(':id/produits'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)(':id/childsproduits'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "getChildsProducts", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_entity_1.CategoryEntity]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_entity_1.CategoryEntity]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt-admin')),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "deleteUser", null);
CategorysController = __decorate([
    (0, common_1.Controller)('categorys'),
    __metadata("design:paramtypes", [categorys_service_1.CategorysService])
], CategorysController);
exports.CategorysController = CategorysController;
//# sourceMappingURL=categorys.controller.js.map