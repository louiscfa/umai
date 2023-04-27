import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  constructor(private reservationService: ReservationService) { }

  submit(data:any){
    this.reservationService.postData({dateReservation: data.dateReservation, iduser: /*Number(localStorage.getItem("userId"))*/1, idplace:1});
  }
  
}
