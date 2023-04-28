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
exports.PlacesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const place_entity_1 = require("./place.entity/place.entity");
const reservations_service_1 = require("../reservations/reservations.service");
const typeorm_3 = require("typeorm");
let PlacesService = class PlacesService {
    constructor(placesRepository, reservationsService, connection) {
        this.placesRepository = placesRepository;
        this.reservationsService = reservationsService;
        this.connection = connection;
    }
    async getPlaces() {
        return await this.placesRepository.find();
    }
    async getPlace(_id) {
        return await this.placesRepository.findOneBy({ "id": _id });
    }
    async getPlaceReservations(_id) {
        return await this.reservationsService.getReservationsByPlace(_id);
    }
    async getPlaceDisponible(_date, _isMidi) {
        return this.connection.query('SELECT p.id as id, p.nombrePlace as nombrePlace FROM place p LEFT JOIN reservation on reservation.idplace = p.id WHERE reservation.dateReservation != \'' + _date + '\' OR reservation.isMidi != \'' + _isMidi + '\' OR  reservation.isMidi IS NULL OR reservation.dateReservation IS NULL;');
    }
    async createPlace(product) {
        return await this.placesRepository.save(product);
    }
    async updatePlace(place) {
        this.placesRepository.save(place);
    }
    async deletePlace(place) {
        this.placesRepository.delete(place);
    }
};
PlacesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(place_entity_1.PlaceEntity)),
    __param(1, (0, common_1.Inject)(reservations_service_1.ReservationsService)),
    __param(2, (0, typeorm_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        reservations_service_1.ReservationsService,
        typeorm_3.Connection])
], PlacesService);
exports.PlacesService = PlacesService;
//# sourceMappingURL=places.service.js.map