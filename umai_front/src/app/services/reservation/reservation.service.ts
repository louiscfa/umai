import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { of } from 'rxjs';

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
}
