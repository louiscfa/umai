import { ReservationsService } from './reservations.service';
import { ReservationEntity } from './reservation.entity/reservation.entity';
export declare class ReservationsController {
    private service;
    constructor(service: ReservationsService);
    getAll(params: any): Promise<ReservationEntity[]>;
    get(params: any): Promise<ReservationEntity>;
    create(reservation: ReservationEntity): Promise<ReservationEntity>;
    update(reservation: ReservationEntity): Promise<void>;
    deleteUser(params: any): Promise<void>;
}
