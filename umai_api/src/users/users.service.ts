import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity/user.entity';
import { ReservationEntity } from 'src/reservations/reservation.entity/reservation.entity';
import { ReservationsService } from 'src/reservations/reservations.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
    @Inject(ReservationsService) private reservationsService: ReservationsService) {}

    async getUsers(): Promise<UserEntity[]> {
        return await this.usersRepository.find({relations:{type:true}});
    }

    async findOne(username: string): Promise<UserEntity | undefined>{
        let users = await this.usersRepository.find(
            {relations:{type:true}, where:[{"email": username}]});
            if(users.length == 1){
                return users[0];
            }else {
                return undefined;
            }
    }

    async getUser(_id: number): Promise<UserEntity[]>{
        return await this.usersRepository.find({
            relations:{type: true},
            where:[{ "id": _id}]
        });
    }

    async createUser(user: UserEntity){
        if(user.password){
            const password = user.password;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password = hash;
        }
        this.usersRepository.save(user);
    }

    async updateUser(user: UserEntity){
        if(user.password){
            const password = user.password;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password = hash;
        }
        this.usersRepository.save(user);
    }

    async getUserReservations(_id: number): Promise<ReservationEntity[]> {
        return await this.reservationsService.getReservationsByUser(_id);
    }

    async deleteUser(user: UserEntity){
        this.usersRepository.delete(user);
    }

    async saveorupdateRefreshToken(refreshToken:string,
        id:string, 
        refreshtokenexpires){
        await this.usersRepository.update(id,{refreshtoken:refreshToken, refreshtokenexpires});
    }

}
