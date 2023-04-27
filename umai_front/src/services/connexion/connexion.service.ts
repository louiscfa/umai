import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('http://localhost:3000/users');
  }

  postData(methode: any, url = "", data = {}, json = true) {
    response: const = await fetch(url, {
      method: methode,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    if (json) {
      return response.json();
    }
    else {
      return response;
    }
  }
}
