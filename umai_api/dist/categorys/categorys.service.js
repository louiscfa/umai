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
exports.CategorysService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./category.entity/category.entity");
const produits_service_1 = require("../produits/produits.service");
let CategorysService = class CategorysService {
    constructor(categorysRepository, productsService) {
        this.categorysRepository = categorysRepository;
        this.productsService = productsService;
    }
    async getCategorys() {
        return await this.categorysRepository.find({ relations: { cat: true } });
    }
    async getCategory(_id) {
        return await this.categorysRepository.findOneBy({ "id": _id });
    }
    async getCategoryProducts(_id) {
        return await this.productsService.getProductsByCategory(_id);
    }
    async getCategoryChilds(_id) {
        return await this.categorysRepository
            .createQueryBuilder('category')
            .where('category.cat = :categoryId', { categoryId: _id })
            .getMany();
    }
    async createCategory(product) {
        return await this.categorysRepository.save(product);
    }
    async updateCategory(product) {
        this.categorysRepository.save(product);
    }
    async deleteCategory(product) {
        this.categorysRepository.delete(product);
    }
};
CategorysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __param(1, (0, common_1.Inject)(produits_service_1.ProduitsService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        produits_service_1.ProduitsService])
], CategorysService);
exports.CategorysService = CategorysService;
//# sourceMappingURL=categorys.service.js.map