import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from 'src/app/interface/profil/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private _http: HttpClient) { }

 // getProfil() : Profil {
    //return this._http.get('');
 // }

  putProfil(data: any){
    return this._http.put('', data);
  }
}
