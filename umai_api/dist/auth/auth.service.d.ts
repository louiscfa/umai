import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    generateRefreshToken(userId: any): Promise<string>;
    login(user: any): Promise<{
        access_token: string;
        refresh_token: string;
        userId: any;
        typeuser: any;
    }>;
}
