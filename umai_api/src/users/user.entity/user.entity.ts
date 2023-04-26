import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { TypeUserEntity } from "src/typeusers/typeuser.entity/typeuser.entity";

@Entity("user")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    firstname: string;

    @Column({ length: 250 })
    lastname: string;

    @Column({ length: 12 })
    phone: string;

    @Column({ length: 250, unique: true })
    email: string;

    @Column('text')
    password: string;

    @Column({ length: 250 })
    address: string;

    @ManyToOne(type => TypeUserEntity, role => role.id)
    @JoinColumn({ name: 'type' })
    type: TypeUserEntity;

    @Column({ nullable: true })
    refreshtoken: string;

    @Column({ nullable: true })
    refreshtokenexpires: string;

}
