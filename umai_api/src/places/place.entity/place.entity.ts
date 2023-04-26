import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('place')
export class PlaceEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombrePlace: number;

}
