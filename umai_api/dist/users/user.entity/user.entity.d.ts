import { TypeUserEntity } from "src/typeusers/typeuser.entity/typeuser.entity";
export declare class UserEntity {
    id: number;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
    address: string;
    type: TypeUserEntity;
    refreshtoken: string;
    refreshtokenexpires: string;
}
