export declare class CategoryEntity {
    id: number;
    name: string;
    description: string;
    cat: CategoryEntity;
    children: CategoryEntity[];
}
