import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from 'src/app/interface/profil/profil';
import { Reservation } from 'src/app/interface/reservation/reservation';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {


  constructor(private _http: HttpClient) { }
 
  getReservation(){
    return this._http.get<Reservation[]>('http://localhost:3000/users/'+localStorage.getItem('userId')+'/reservations');
  }

  getProfil() {
   return this._http.get<Profil>('http://localhost:3000/users/'+localStorage.getItem('userId'));
  }

  putProfil(data: any) {
    console.log(data);
    return this._http.put<any>('http://localhost:3000/users', data).subscribe(response => {
      console.log('response:'+response); // log the response to the console
      // Do something with the response data in your component
    }, error => {
      console.error('error:'+error); // log any errors to the console
      // Handle the error in your component
    });
  }
}
