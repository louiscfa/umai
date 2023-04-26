"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const produits_module_1 = require("./produits/produits.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeusers_module_1 = require("./typeusers/typeusers.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const categorys_module_1 = require("./categorys/categorys.module");
const reservations_module_1 = require("./reservations/reservations.module");
const places_module_1 = require("./places/places.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "localhost",
                "port": 3306,
                "username": "root",
                "password": "",
                "database": "umai",
                "entities": ["dist/**/**.entity{.ts,.js}"],
                "synchronize": true
            }),
            produits_module_1.ProduitsModule,
            typeusers_module_1.TypeUsersModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            categorys_module_1.CategorysModule,
            reservations_module_1.ReservationsModule,
            places_module_1.PlacesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map