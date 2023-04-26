import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAll(@Param() params) {
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Get(':id/reservations')
    getReservations(@Param() params){
        return this.service.getUserReservations(params.id);
    }

    @Post()
    create(@Body() typeuser: UserEntity) {
        return this.service.createUser(typeuser);
    }

    @Put()
    update(@Body() typeuser: UserEntity) {
        return this.service.updateUser(typeuser);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteTypeUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}
