"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity/user.entity");
const reservations_service_1 = require("../reservations/reservations.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository, reservationsService) {
        this.usersRepository = usersRepository;
        this.reservationsService = reservationsService;
    }
    async getUsers() {
        return await this.usersRepository.find({ relations: { type: true } });
    }
    async findOne(username) {
        let users = await this.usersRepository.find({ relations: { type: true }, where: [{ "email": username }] });
        if (users.length == 1) {
            return users[0];
        }
        else {
            return undefined;
        }
    }
    async getUser(_id) {
        return await this.usersRepository.find({
            relations: { type: true },
            where: [{ "id": _id }]
        });
    }
    async createUser(user) {
        if (user.password) {
            const password = user.password;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password = hash;
        }
        this.usersRepository.save(user);
    }
    async updateUser(user) {
        if (user.password) {
            const password = user.password;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password = hash;
        }
        this.usersRepository.save(user);
    }
    async getUserReservations(_id) {
        return await this.reservationsService.getReservationsByUser(_id);
    }
    async deleteUser(user) {
        this.usersRepository.delete(user);
    }
    async saveorupdateRefreshToken(refreshToken, id, refreshtokenexpires) {
        await this.usersRepository.update(id, { refreshtoken: refreshToken, refreshtokenexpires });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, common_1.Inject)(reservations_service_1.ReservationsService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        reservations_service_1.ReservationsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map