import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProduitEntity } from 'src/produits/produit.entity/produit.entity';
import { CategoryEntity } from './category.entity/category.entity';
import { ProduitsService } from 'src/produits/produits.service';

@Injectable()
export class CategorysService {

    constructor(@InjectRepository(CategoryEntity) private categorysRepository: Repository<CategoryEntity>,
        @Inject(ProduitsService) private productsService: ProduitsService) { }

    async getCategorys(): Promise<CategoryEntity[]> {
        return await this.categorysRepository.find({ relations: { cat: true } });
    }

    async getCategory(_id: number): Promise<CategoryEntity> {
        return await this.categorysRepository.findOneBy({ "id": _id });
    }

    async getCategoryProducts(_id: number): Promise<ProduitEntity[]> {
        return await this.productsService.getProductsByCategory(_id);
    }

    async getChildsCategoryProducts(_id: number): Promise<ProduitEntity[]> {
        return await this.productsService.getProductsByChildsCategory(_id);
    }

    async getCategoryChilds(_id: number): Promise<CategoryEntity[]> {
        return await this.categorysRepository
        .createQueryBuilder('category')
        .where('category.cat = :categoryId', { categoryId: _id })
        .getMany();
    }

    async getAllCategoryChilds(_id: number): Promise<CategoryEntity[]> {
        return await this.categorysRepository
        .createQueryBuilder('category')
        .where('category.cat = :categoryId', { categoryId: _id })
        .getMany();
    }

    async createCategory(product: CategoryEntity) {
        return await this.categorysRepository.save(product);
    }

    async updateCategory(product: CategoryEntity) {
        this.categorysRepository.save(product)
    }

    async deleteCategory(product: CategoryEntity) {
        this.categorysRepository.delete(product);
    }

}
