import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import { Connexion } from 'src/app/interface/connexion/connexion';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('http://localhost:3000/users');
  }

  postData(methode: any, url = "", body = {}, connexion = true) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    }
    if (connexion) {
      return this._http.post<Connexion>(url, body)
        .pipe(
          catchError(error => {
            console.error('Error:', error);
            return of(null);
          })
        )
        .subscribe(response => {
          localStorage.setItem('access_token', JSON.stringify(response?.access_token));
          localStorage.setItem('userId', JSON.stringify(response?.userId))
          return response?.access_token;
        });
    }
    else{
      return this._http.post(url, body)
        .pipe(
          catchError(error => {
            console.error('Error:', error);
            return of(null);
          })
        )
        .subscribe(response => {
          return response?.toString;
        });
    }
  }
}
