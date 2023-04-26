import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ReservationEntity } from './reservation.entity/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity])],
  providers: [ReservationsService],
  controllers: [ReservationsController],
  exports: [ReservationsService]
})
export class ReservationsModule {}
