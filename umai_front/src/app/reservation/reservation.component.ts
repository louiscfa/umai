import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  constructor(private reservationService: ReservationService) { }

  isConnected: boolean = false;
  tables:any[] =[]

  ngOnInit(){
    if(localStorage.getItem("access_token") != null){
      this.isConnected = true;
    }
    else this.isConnected = false;

    this.reservationService.getTable().subscribe(elem => {
      this.tables = elem;
    });
  }

  submit(data:any){
    console.log(data)
    this.reservationService.postData({dateReservation: data.dateReservation, user: Number(localStorage.getItem("userId")), place: Number(data.selectTable), isMidi:data.selectService});
  }

  changes(data:any){
    console.log(data)
     this.reservationService.getTableDisponible(data.dateReservation,data.selectService).subscribe(elem => {
        this.tables = elem;
    });
  }
  
}
