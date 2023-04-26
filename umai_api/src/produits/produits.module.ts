import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';
import { ProduitEntity } from './produit.entity/produit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProduitEntity])],
  providers: [ProduitsService],
  controllers: [ProduitsController],
  exports: [ProduitsService]
})

export class ProduitsModule {}