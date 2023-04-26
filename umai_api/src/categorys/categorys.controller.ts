import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategoryEntity } from './category.entity/category.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('categorys')
export class CategorysController {

    constructor(private service: CategorysService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getCategorys();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getCategory(params.id);
    }

    @Get(':id/childs')
    getChilds(@Param() params) {
        return this.service.getCategoryChilds(params.id);
    }

    @Get(':id/allchilds')
    getAllChilds(@Param() params) {
        return this.service.getAllCategoryChilds(params.id);
    }

    @Get(':id/produits')
    getProducts(@Param() params){
        return this.service.getCategoryProducts(params.id);
    }

    @Get(':id/childsproduits')
    getChildsProducts(@Param() params){
        return this.service.getChildsCategoryProducts(params.id);
    }

    //@UseGuards(AuthGuard('jwt-admin'))
    @Post()
    create(@Body() product: CategoryEntity) {
        return this.service.createCategory(product);
    }

    //@UseGuards(AuthGuard('jwt-admin'))
    @Put()
    update(@Body() product: CategoryEntity) {
        return this.service.updateCategory(product);
    }

    @UseGuards(AuthGuard('jwt-admin'))
    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteCategory(params.id);
    }
}
