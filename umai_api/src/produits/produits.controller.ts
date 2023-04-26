import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitEntity } from './produit.entity/produit.entity';

@Controller('produits')
export class ProduitsController {

    constructor(private service: ProduitsService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getProducts();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getProduct(params.id);
    }

    @Post()
    create(@Body() product: ProduitEntity) {
        return this.service.createProduct(product);
    }

    @Put()
    update(@Body() product: ProduitEntity) {
        return this.service.updateProduct(product);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteProduct(params.id);
    }

}
