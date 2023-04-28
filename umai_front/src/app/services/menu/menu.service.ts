import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from 'src/app/interface/menu/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http: HttpClient) { }

  getAllMenus(){
    return this._http.get<Menu[]>('http://localhost:3000/produits');
  }

  getCategoryMenus(categorieId: number){
    return this._http.get<Menu[]>('http://localhost:3000/categorys/'+categorieId+'/produits'); 
  }
}
