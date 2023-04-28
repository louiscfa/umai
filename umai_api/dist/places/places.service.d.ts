import { Repository } from 'typeorm';
import { PlaceEntity } from './place.entity/place.entity';
import { ReservationEntity } from 'src/reservations/reservation.entity/reservation.entity';
import { ReservationsService } from 'src/reservations/reservations.service';
import { Connection } from 'typeorm';
export declare class PlacesService {
    private placesRepository;
    private reservationsService;
    private readonly connection;
    constructor(placesRepository: Repository<PlaceEntity>, reservationsService: ReservationsService, connection: Connection);
    getPlaces(): Promise<PlaceEntity[]>;
    getPlace(_id: number): Promise<PlaceEntity>;
    getPlaceReservations(_id: number): Promise<ReservationEntity[]>;
    getPlaceDisponible(_date: string, _isMidi: string): Promise<PlaceEntity[]>;
    createPlace(product: PlaceEntity): Promise<PlaceEntity>;
    updatePlace(place: PlaceEntity): Promise<void>;
    deletePlace(place: PlaceEntity): Promise<void>;
}
