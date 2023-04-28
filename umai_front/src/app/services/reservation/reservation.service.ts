import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import { Reservation } from 'src/app/interface/reservation/reservation';
import { Table } from 'src/app/interface/table/table'; 

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private _http:HttpClient) { }

  postData(body:any) {
    console.log(body);
    return this._http.post("http://localhost:3000/reservations", body) .pipe(
      catchError(error => {
        console.error('Error:', error);
        return of(null);
      })
    )
    .subscribe(response => {
      return response;
    });
  }

  getReservations(){
    return this._http.get<Reservation[]>('http://localhost:3000/reservations');
  }

  getTable(){
    return this._http.get<Table[]>('http://localhost:3000/places');
  }

  getTableDisponible(date:string, isMidi:string){
    return this._http.get<Table[]>('http://localhost:3000/places/'+date+'/'+isMidi);
  }
}
