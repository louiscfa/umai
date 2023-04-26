import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { PlaceEntity } from './place.entity/place.entity';
import { ReservationsModule } from 'src/reservations/reservations.module';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceEntity]), ReservationsModule],
  providers: [PlacesService],
  controllers: [PlacesController]
})

export class PlacesModule { }
