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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitEntity = void 0;
const category_entity_1 = require("../../categorys/category.entity/category.entity");
const typeorm_1 = require("typeorm");
let ProduitEntity = class ProduitEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProduitEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 250 }),
    __metadata("design:type", String)
], ProduitEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext'),
    __metadata("design:type", String)
], ProduitEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext'),
    __metadata("design:type", String)
], ProduitEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 6, scale: 2 }),
    __metadata("design:type", Number)
], ProduitEntity.prototype, "prix", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ProduitEntity.prototype, "isactive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(cat => category_entity_1.CategoryEntity, cat => cat.id),
    (0, typeorm_1.JoinColumn)({ name: 'cat' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], ProduitEntity.prototype, "cat", void 0);
ProduitEntity = __decorate([
    (0, typeorm_1.Entity)("produit")
], ProduitEntity);
exports.ProduitEntity = ProduitEntity;
//# sourceMappingURL=produit.entity.js.map