import { CategoryEntity } from "src/categorys/category.entity/category.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity("produit")
export class ProduitEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name: string;

    @Column('longtext')
    description: string;

    @Column('longtext')
    image: string;

    @Column('decimal', {precision: 6, scale: 2})
    prix: number;

    @Column()
    isactive: boolean;

    @ManyToOne(cat => CategoryEntity, cat => cat.id)
    @JoinColumn({name: 'cat' })
    cat: CategoryEntity;

}
