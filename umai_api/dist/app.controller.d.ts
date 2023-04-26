import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    getHello(): string;
    refreshToken(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    login(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
