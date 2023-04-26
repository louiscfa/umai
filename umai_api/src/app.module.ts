import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeUsersModule } from './typeusers/typeusers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategorysModule } from './categorys/categorys.module';
import { ReservationsModule } from './reservations/reservations.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [TypeOrmModule.forRoot({
              "type": "mysql",
              "host":  "localhost",
              "port":  3306,
              "username": "root",
              "password": "",
              "database": "umai",
              "entities": ["dist/**/**.entity{.ts,.js}"],
              "synchronize": true
          }),
          ProduitsModule,
          TypeUsersModule,
          UsersModule,
          AuthModule,
          CategorysModule,
          ReservationsModule,
          PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
