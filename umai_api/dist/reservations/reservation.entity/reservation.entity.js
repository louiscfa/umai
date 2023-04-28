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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/user.entity/user.entity");
const place_entity_1 = require("../../places/place.entity/place.entity");
let ReservationEntity = class ReservationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReservationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], ReservationEntity.prototype, "dateReservation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], ReservationEntity.prototype, "isMidi", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(user => user_entity_1.UserEntity, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'iduser' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ReservationEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(place => place_entity_1.PlaceEntity, place => place.id),
    (0, typeorm_1.JoinColumn)({ name: 'idplace' }),
    __metadata("design:type", place_entity_1.PlaceEntity)
], ReservationEntity.prototype, "place", void 0);
ReservationEntity = __decorate([
    (0, typeorm_1.Entity)("reservation")
], ReservationEntity);
exports.ReservationEntity = ReservationEntity;
//# sourceMappingURL=reservation.entity.js.map