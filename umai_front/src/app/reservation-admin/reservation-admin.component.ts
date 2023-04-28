import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-admin',
  templateUrl: './reservation-admin.component.html',
  styleUrls: ['./reservation-admin.component.css']
})
export class ReservationAdminComponent {
  reservations: any[] = []

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit() {
    if (Number(localStorage.getItem("typeuser")) != 1)
      this.router.navigate(['/accueil'])
    this.reservationService.getReservations().subscribe(elem => {
      this.reservations = elem;
    });

  }


}
