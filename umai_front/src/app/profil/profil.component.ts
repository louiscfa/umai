import { Component } from '@angular/core';
import { ProfilService } from '../services/profil/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  datas: any = null;
  reservations: any[] = [];

  constructor(private profilService: ProfilService) {

  }

  ngOnInit() {
    this.profilService.getProfil().subscribe(elem => {
      this.datas = elem;
    });
    this.profilService.getReservation().subscribe(elem=>{
      this.reservations = elem;
    });
  }

  submit(data: any) {
    console.log("ok")
    if (data.password == null){
      this.profilService.putProfil({ firstname: data.firstname, lastname: data.lastname, email: data.email,
        phone: data.phone, address: data.address, id: Number(localStorage.getItem('userId'))});
    }
    else{
      this.profilService.putProfil({ firstname: data.firstname, lastname: data.lastname, email: data.email,
        phone: data.phone, address: data.address, password: data.password, id: Number(localStorage.getItem('userId'))});
    }
  }

}
