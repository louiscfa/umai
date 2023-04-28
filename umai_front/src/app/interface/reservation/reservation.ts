import { Profil } from "../profil/profil";

export interface Reservation {
    id: number,
    dateReservation: Date,
    iduser: number,
    idplace: number,
    user:Profil
}
