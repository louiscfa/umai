import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from "src/users/user.entity/user.entity";
import { PlaceEntity } from "src/places/place.entity/place.entity";

@Entity("reservation")
export class ReservationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    dateReservation: Date;

    @Column({ type: 'boolean' })
    isMidi: boolean;

    @ManyToOne(user => UserEntity, user => user.id)
    @JoinColumn({ name: 'iduser' })
    user: UserEntity;

    @ManyToOne(place => PlaceEntity, place => place.id)
    @JoinColumn({ name: 'idplace' })
    place: PlaceEntity;
}
