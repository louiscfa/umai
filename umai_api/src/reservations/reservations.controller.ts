import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationEntity } from './reservation.entity/reservation.entity';

@Controller('reservations')
export class ReservationsController {

    constructor(private service: ReservationsService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getReservations();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getReservation(params.id);
    }

    @Post()
    create(@Body() reservation: ReservationEntity) {
        return this.service.createReservation(reservation);
    }

    @Put()
    update(@Body() reservation: ReservationEntity) {
        return this.service.updateReservation(reservation);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteReservation(params.id);
    }
}
