import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaceEntity } from './place.entity/place.entity';
import { ReservationEntity } from 'src/reservations/reservation.entity/reservation.entity';
import { ReservationsService } from 'src/reservations/reservations.service';
import { Connection } from 'typeorm';

@Injectable()
export class PlacesService {
    constructor(@InjectRepository(PlaceEntity) private placesRepository: Repository<PlaceEntity>,
        @Inject(ReservationsService) private reservationsService: ReservationsService,
        @InjectConnection() private readonly connection: Connection) { }

    async getPlaces(): Promise<PlaceEntity[]> {
        return await this.placesRepository.find();
    }

    async getPlace(_id: number): Promise<PlaceEntity> {
        return await this.placesRepository.findOneBy({ "id": _id });
    }

    async getPlaceReservations(_id: number): Promise<ReservationEntity[]> {
        return await this.reservationsService.getReservationsByPlace(_id);
    }

    async getPlaceDisponible(_date: string, _isMidi: string): Promise<PlaceEntity[]> {
        
        return this.connection.query('SELECT p.id as id, p.nombrePlace as nombrePlace FROM place p LEFT JOIN reservation on reservation.idplace = p.id WHERE reservation.dateReservation != \''+_date+'\' OR reservation.isMidi != \''+_isMidi+'\' OR  reservation.isMidi IS NULL OR reservation.dateReservation IS NULL;');
    }

    async createPlace(product: PlaceEntity) {
        return await this.placesRepository.save(product);
    }

    async updatePlace(place: PlaceEntity) {
        this.placesRepository.save(place)
    }

    async deletePlace(place: PlaceEntity) {
        this.placesRepository.delete(place);
    }

}
