import { Entity, Column, PrimaryGeneratedColumn, JoinColumn,ManyToOne } from "typeorm";

@Entity("category")
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 250 })
    description: string;

    @ManyToOne(cat => CategoryEntity, cat => cat.id)
    @JoinColumn({ name: 'cat' })
    cat: CategoryEntity;

    /*@ManyToOne(cat => CategoryEntity, cat => cat.id)
    catList: CategoryEntity[];*/
}
