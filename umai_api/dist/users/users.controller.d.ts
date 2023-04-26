import { UsersService } from './users.service';
import { UserEntity } from './user.entity/user.entity';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    getAll(params: any): Promise<UserEntity[]>;
    get(params: any): Promise<UserEntity[]>;
    getReservations(params: any): Promise<import("../reservations/reservation.entity/reservation.entity").ReservationEntity[]>;
    create(typeuser: UserEntity): Promise<void>;
    update(typeuser: UserEntity): Promise<void>;
    deleteTypeUser(params: any): Promise<void>;
}
