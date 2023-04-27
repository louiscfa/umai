import { Component } from '@angular/core';
import { ProfilService } from '../services/profil/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  datas: any[] = [];

  constructor(private profilService: ProfilService) {

  }

  ngOnInit() {
   // this.datas = this.profilService.getProfil();
  }

}
