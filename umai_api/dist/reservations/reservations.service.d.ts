import { Repository } from 'typeorm';
import { ReservationEntity } from './reservation.entity/reservation.entity';
export declare class ReservationsService {
    private reservationsRepository;
    constructor(reservationsRepository: Repository<ReservationEntity>);
    getReservations(): Promise<ReservationEntity[]>;
    getReservation(_id: number): Promise<ReservationEntity>;
    createReservation(reservation: ReservationEntity): Promise<ReservationEntity>;
    updateReservation(reservation: ReservationEntity): Promise<void>;
    deleteReservation(reservation: ReservationEntity): Promise<void>;
    getReservationsByPlace(_id: number): Promise<ReservationEntity[]>;
    getReservationsByUser(_id: number): Promise<ReservationEntity[]>;
}
