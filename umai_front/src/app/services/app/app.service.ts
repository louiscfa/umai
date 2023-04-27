import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'src/app/interface/categorie/categorie';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  getData() {

    return this._http.get<Categorie[]>('http://localhost:3000/categorys');
  }
}
