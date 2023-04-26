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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdminStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const users_service_1 = require("../users/users.service");
let JwtAdminStrategy = class JwtAdminStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, "jwt-admin") {
    constructor(usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromBodyField('access_token'),
            ignoreExpiration: true,
            secretOrKey: constants_1.jwtConstants.secret,
            passReqToCallback: true
        });
        this.usersService = usersService;
    }
    async validate(req, payload) {
        var user = await this.usersService.findOne(payload.username);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        if (user.type.id != 1) {
            throw new common_1.UnauthorizedException();
        }
        const { password } = user, result = __rest(user, ["password"]);
        return result;
    }
};
JwtAdminStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], JwtAdminStrategy);
exports.JwtAdminStrategy = JwtAdminStrategy;
//# sourceMappingURL=jwt.admin.strategy.js.map