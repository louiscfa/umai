import { UserEntity } from "src/users/user.entity/user.entity";
import { PlaceEntity } from "src/places/place.entity/place.entity";
export declare class ReservationEntity {
    id: number;
    dateReservation: Date;
    user: UserEntity;
    place: PlaceEntity;
}
