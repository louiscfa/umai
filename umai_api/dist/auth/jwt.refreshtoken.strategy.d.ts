import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(req: any, payload: any): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        phone: string;
        email: string;
        address: string;
        type: import("../typeusers/typeuser.entity/typeuser.entity").TypeUserEntity;
        refreshtoken: string;
        refreshtokenexpires: string;
    }>;
}
export {};
