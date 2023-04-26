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
exports.ProduitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produit_entity_1 = require("./produit.entity/produit.entity");
let ProduitsService = class ProduitsService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async getProducts() {
        return await this.productsRepository.find({ relations: { cat: true } });
    }
    async getProduct(_id) {
        return await this.productsRepository.findOneBy({ "id": _id });
    }
    async createProduct(product) {
        return await this.productsRepository.save(product);
    }
    async updateProduct(product) {
        this.productsRepository.save(product);
    }
    async deleteProduct(product) {
        this.productsRepository.delete(product);
    }
    async getProductsByCategory(_id) {
        return await this.productsRepository
            .createQueryBuilder('produit')
            .leftJoinAndSelect('produit.cat', 'category')
            .where('category.id = :categoryId', { categoryId: _id })
            .getMany();
    }
};
ProduitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produit_entity_1.ProduitEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProduitsService);
exports.ProduitsService = ProduitsService;
//# sourceMappingURL=produits.service.js.map