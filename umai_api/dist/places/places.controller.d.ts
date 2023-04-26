import { PlacesService } from './places.service';
import { PlaceEntity } from './place.entity/place.entity';
export declare class PlacesController {
    private service;
    constructor(service: PlacesService);
    getAll(params: any): Promise<PlaceEntity[]>;
    get(params: any): Promise<PlaceEntity>;
    getReservations(params: any): Promise<import("../reservations/reservation.entity/reservation.entity").ReservationEntity[]>;
    create(place: PlaceEntity): Promise<PlaceEntity>;
    update(place: PlaceEntity): Promise<void>;
    deletePlace(params: any): Promise<void>;
}
