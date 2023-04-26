import { Repository } from 'typeorm';
import { PlaceEntity } from './place.entity/place.entity';
import { ReservationEntity } from 'src/reservations/reservation.entity/reservation.entity';
import { ReservationsService } from 'src/reservations/reservations.service';
export declare class PlacesService {
    private placesRepository;
    private reservationsService;
    constructor(placesRepository: Repository<PlaceEntity>, reservationsService: ReservationsService);
    getPlaces(): Promise<PlaceEntity[]>;
    getPlace(_id: number): Promise<PlaceEntity>;
    getPlaceReservations(_id: number): Promise<ReservationEntity[]>;
    createPlace(product: PlaceEntity): Promise<PlaceEntity>;
    updatePlace(place: PlaceEntity): Promise<void>;
    deletePlace(place: PlaceEntity): Promise<void>;
}
