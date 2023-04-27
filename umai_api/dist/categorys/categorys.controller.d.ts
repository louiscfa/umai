import { CategorysService } from './categorys.service';
import { CategoryEntity } from './category.entity/category.entity';
export declare class CategorysController {
    private service;
    constructor(service: CategorysService);
    getAll(params: any): Promise<CategoryEntity[]>;
    get(params: any): Promise<CategoryEntity>;
    getChilds(params: any): Promise<CategoryEntity[]>;
    getAllChilds(params: any): Promise<CategoryEntity[]>;
    getProducts(params: any): Promise<import("../produits/produit.entity/produit.entity").ProduitEntity[]>;
    getChildsProducts(params: any): Promise<import("../produits/produit.entity/produit.entity").ProduitEntity[]>;
    create(product: CategoryEntity): Promise<CategoryEntity>;
    update(product: CategoryEntity): Promise<void>;
    deleteUser(params: any): Promise<void>;
}
