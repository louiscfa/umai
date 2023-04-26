import { Repository } from 'typeorm';
import { UserEntity } from './user.entity/user.entity';
import { ReservationEntity } from 'src/reservations/reservation.entity/reservation.entity';
import { ReservationsService } from 'src/reservations/reservations.service';
export declare class UsersService {
    private usersRepository;
    private reservationsService;
    constructor(usersRepository: Repository<UserEntity>, reservationsService: ReservationsService);
    getUsers(): Promise<UserEntity[]>;
    findOne(username: string): Promise<UserEntity | undefined>;
    getUser(_id: number): Promise<UserEntity[]>;
    createUser(user: UserEntity): Promise<void>;
    updateUser(user: UserEntity): Promise<void>;
    getUserReservations(_id: number): Promise<ReservationEntity[]>;
    deleteUser(user: UserEntity): Promise<void>;
    saveorupdateRefreshToken(refreshToken: string, id: string, refreshtokenexpires: any): Promise<void>;
}
