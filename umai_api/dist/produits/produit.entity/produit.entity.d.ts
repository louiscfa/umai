import { CategoryEntity } from "src/categorys/category.entity/category.entity";
export declare class ProduitEntity {
    id: number;
    name: string;
    description: string;
    image: string;
    prix: number;
    isactive: boolean;
    cat: CategoryEntity;
}
