import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProduitEntity } from './produit.entity/produit.entity';

@Injectable()
export class ProduitsService {

    constructor(@InjectRepository(ProduitEntity) private productsRepository: Repository<ProduitEntity>) { }

    async getProducts(): Promise<ProduitEntity[]> {
        return await this.productsRepository.find({ relations: { cat: true } });
    }

    async getProduct(_id: number): Promise<ProduitEntity> {
        return await this.productsRepository.findOneBy({ "id": _id });
    }

    async createProduct(product: ProduitEntity) {
        return await this.productsRepository.save(product);
    }

    async updateProduct(product: ProduitEntity) {
        this.productsRepository.save(product)
    }

    async deleteProduct(product: ProduitEntity) {
        this.productsRepository.delete(product);
    }

    async getProductsByCategory(_id: number): Promise<ProduitEntity[]> {
        return await this.productsRepository
            .createQueryBuilder('produit')
            .leftJoinAndSelect('produit.cat', 'category')
            .where('category.id = :categoryId', { categoryId: _id })
            .getMany();
    }

    async getProductsByChildsCategory(_id: number): Promise<ProduitEntity[]> {
        return await this.productsRepository
            .createQueryBuilder('produit')
            .leftJoinAndSelect('produit.cat', 'category')
            .where('category.cat = :categoryId', { categoryId: _id })
            .getMany();
    }

}
