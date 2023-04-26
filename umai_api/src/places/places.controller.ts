import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlaceEntity } from './place.entity/place.entity';

@Controller('places')
export class PlacesController {
    constructor(private service: PlacesService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getPlaces();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getPlace(params.id);
    }

    @Get(':id/reservations')
    getReservations(@Param() params){
        return this.service.getPlaceReservations(params.id);
    }

    @Post()
    create(@Body() place: PlaceEntity) {
        return this.service.createPlace(place);
    }

    @Put()
    update(@Body() place: PlaceEntity) {
        return this.service.updatePlace(place);
    }

    @Delete(':id')
    deletePlace(@Param() params) {
        return this.service.deletePlace(params.id);
    }
}
