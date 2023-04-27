import { Repository } from 'typeorm';
import { ProduitEntity } from 'src/produits/produit.entity/produit.entity';
import { CategoryEntity } from './category.entity/category.entity';
import { ProduitsService } from 'src/produits/produits.service';
export declare class CategorysService {
    private categorysRepository;
    private productsService;
    constructor(categorysRepository: Repository<CategoryEntity>, productsService: ProduitsService);
    getCategorys(): Promise<CategoryEntity[]>;
    getCategory(_id: number): Promise<CategoryEntity>;
    getCategoryProducts(_id: number): Promise<ProduitEntity[]>;
    getChildsCategoryProducts(_id: number): Promise<ProduitEntity[]>;
    getCategoryChilds(_id: number): Promise<CategoryEntity[]>;
    getAllCategoryChilds(_id: number): Promise<CategoryEntity[]>;
    createCategory(product: CategoryEntity): Promise<CategoryEntity>;
    updateCategory(product: CategoryEntity): Promise<void>;
    deleteCategory(product: CategoryEntity): Promise<void>;
}
