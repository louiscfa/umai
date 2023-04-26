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
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reservation_entity_1 = require("./reservation.entity/reservation.entity");
let ReservationsService = class ReservationsService {
    constructor(reservationsRepository) {
        this.reservationsRepository = reservationsRepository;
    }
    async getReservations() {
        return await this.reservationsRepository.find({ relations: { user: true, place: true } });
    }
    async getReservation(_id) {
        return await this.reservationsRepository.findOneBy({ "id": _id });
    }
    async createReservation(reservation) {
        return await this.reservationsRepository.save(reservation);
    }
    async updateReservation(reservation) {
        this.reservationsRepository.save(reservation);
    }
    async deleteReservation(reservation) {
        this.reservationsRepository.delete(reservation);
    }
    async getReservationsByPlace(_id) {
        return await this.reservationsRepository
            .createQueryBuilder('reservation')
            .leftJoinAndSelect('reservation.place', 'place')
            .where('place.id = :placeId', { placeId: _id })
            .getMany();
    }
    async getReservationsByUser(_id) {
        return await this.reservationsRepository
            .createQueryBuilder('reservation')
            .leftJoinAndSelect('reservation.user', 'user')
            .where('user.id = :userId', { userId: _id })
            .getMany();
    }
};
ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reservation_entity_1.ReservationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReservationsService);
exports.ReservationsService = ReservationsService;
//# sourceMappingURL=reservations.service.js.map