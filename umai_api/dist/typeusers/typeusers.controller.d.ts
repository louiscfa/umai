import { TypeUsersService } from './typeusers.service';
import { TypeUserEntity } from './typeuser.entity/typeuser.entity';
export declare class TypeUsersController {
    private service;
    constructor(service: TypeUsersService);
    getAll(params: any): Promise<TypeUserEntity[]>;
    get(params: any): Promise<TypeUserEntity>;
    create(typeuser: TypeUserEntity): Promise<void>;
    update(typeuser: TypeUserEntity): Promise<void>;
    deleteTypeUser(params: any): Promise<void>;
}
