import { Repository } from 'typeorm';
import { TypeUserEntity } from './typeuser.entity/typeuser.entity';
export declare class TypeUsersService {
    private typeUsersRepository;
    constructor(typeUsersRepository: Repository<TypeUserEntity>);
    getTypeUsers(): Promise<TypeUserEntity[]>;
    getTypeUser(_id: number): Promise<TypeUserEntity>;
    createTypeUser(typeUser: TypeUserEntity): Promise<void>;
    updateTypeUser(typeUser: TypeUserEntity): Promise<void>;
    deleteTypeUser(typeUser: TypeUserEntity): Promise<void>;
}
