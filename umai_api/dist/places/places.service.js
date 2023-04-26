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
let PlacesService = class PlacesService {
    constructor(placesRepository, reservationsService) {
        this.placesRepository = placesRepository;
        this.reservationsService = reservationsService;
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
    __metadata("design:paramtypes", [typeorm_2.Repository,
        reservations_service_1.ReservationsService])
], PlacesService);
exports.PlacesService = PlacesService;
//# sourceMappingURL=places.service.js.map