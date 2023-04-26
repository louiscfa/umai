import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaceEntity } from './place.entity/place.entity';
import { ReservationEntity } from 'src/reservations/reservation.entity/reservation.entity';
import { ReservationsService } from 'src/reservations/reservations.service';

@Injectable()
export class PlacesService {
    constructor(@InjectRepository(PlaceEntity) private placesRepository: Repository<PlaceEntity>,
        @Inject(ReservationsService) private reservationsService: ReservationsService) { }

    async getPlaces(): Promise<PlaceEntity[]> {
        return await this.placesRepository.find();
    }

    async getPlace(_id: number): Promise<PlaceEntity> {
        return await this.placesRepository.findOneBy({ "id": _id });
    }

    async getPlaceReservations(_id: number): Promise<ReservationEntity[]> {
        return await this.reservationsService.getReservationsByPlace(_id);
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
