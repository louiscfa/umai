import { ProduitsService } from './produits.service';
import { ProduitEntity } from './produit.entity/produit.entity';
export declare class ProduitsController {
    private service;
    constructor(service: ProduitsService);
    getAll(params: any): Promise<ProduitEntity[]>;
    get(params: any): Promise<ProduitEntity>;
    create(product: ProduitEntity): Promise<ProduitEntity>;
    update(product: ProduitEntity): Promise<void>;
    deleteUser(params: any): Promise<void>;
}
