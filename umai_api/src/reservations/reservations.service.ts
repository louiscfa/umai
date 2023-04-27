import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservationEntity } from './reservation.entity/reservation.entity';

@Injectable()
export class ReservationsService {
    constructor(@InjectRepository(ReservationEntity) private reservationsRepository: Repository<ReservationEntity>) { }

    async getReservations(): Promise<ReservationEntity[]> {
        return await this.reservationsRepository.find({ relations: { user: true, place: true } });
    }

    async getReservation(_id: number): Promise<ReservationEntity> {
        return await this.reservationsRepository.findOneBy({ "id": _id });
    }

    async getReservationClient(_id: number): Promise<ReservationEntity> {
        return await this.reservationsRepository.findOneBy({ "id": _id });
    }

    async createReservation(reservation: ReservationEntity) {
        return await this.reservationsRepository.save(reservation);
    }

    async updateReservation(reservation: ReservationEntity) {
        this.reservationsRepository.save(reservation)
    }

    async deleteReservation(reservation: ReservationEntity) {
        this.reservationsRepository.delete(reservation);
    }

    async getReservationsByPlace(_id: number): Promise<ReservationEntity[]> {
        return await this.reservationsRepository
            .createQueryBuilder('reservation')
            .leftJoinAndSelect('reservation.place', 'place')
            .where('place.id = :placeId', { placeId: _id })
            .getMany();
    }

    async getReservationsByUser(_id: number): Promise<ReservationEntity[]> {
        return await this.reservationsRepository
            .createQueryBuilder('reservation')
            .leftJoinAndSelect('reservation.user', 'user')
            .where('user.id = :userId', { userId: _id })
            .getMany();
    }
}
