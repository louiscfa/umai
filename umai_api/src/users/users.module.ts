import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './user.entity/user.entity';
import { ReservationsModule } from 'src/reservations/reservations.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), ReservationsModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})

export class UsersModule {}
