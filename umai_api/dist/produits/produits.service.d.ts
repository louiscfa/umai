import { Repository } from 'typeorm';
import { ProduitEntity } from './produit.entity/produit.entity';
export declare class ProduitsService {
    private productsRepository;
    constructor(productsRepository: Repository<ProduitEntity>);
    getProducts(): Promise<ProduitEntity[]>;
    getProduct(_id: number): Promise<ProduitEntity>;
    createProduct(product: ProduitEntity): Promise<ProduitEntity>;
    updateProduct(product: ProduitEntity): Promise<void>;
    deleteProduct(product: ProduitEntity): Promise<void>;
    getProductsByCategory(_id: number): Promise<ProduitEntity[]>;
}
