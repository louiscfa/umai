import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { TypeUsersService } from './typeusers.service';
import { TypeUserEntity } from './typeuser.entity/typeuser.entity';

@Controller('typeusers')
export class TypeUsersController {
    constructor(private service: TypeUsersService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getTypeUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getTypeUser(params.id);
    }

    @Post()
    create(@Body() typeuser: TypeUserEntity) {
        return this.service.createTypeUser(typeuser);
    }

    @Put()
    update(@Body() typeuser: TypeUserEntity) {
        return this.service.updateTypeUser(typeuser);
    }

    @Delete(':id')
    deleteTypeUser(@Param() params) {
        return this.service.deleteTypeUser(params.id);
    }
}
