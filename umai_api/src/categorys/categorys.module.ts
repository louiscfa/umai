import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';
import { CategoryEntity } from './category.entity/category.entity';
import { ProduitsModule } from 'src/produits/produits.module';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]), ProduitsModule],
  providers: [CategorysService],
  controllers: [CategorysController]
})
export class CategorysModule { }
