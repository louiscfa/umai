import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from 'src/app/interface/menu/menu';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private _http: HttpClient) { }

  getPlat() {
    return this._http.get<Menu>('http://localhost:3000/produits/'+localStorage.getItem('userId'));
   }

}
