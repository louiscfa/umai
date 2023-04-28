import { Component } from '@angular/core';
import { ConnexionService } from '../services/connexion/connexion.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(private connexionService: ConnexionService, private router: Router, private appComponent: AppComponent) {

  }

  public showRegister: boolean = false;
  public showConnexion: boolean = true;
  public message: string = "";
  public class: string = "";
  public disable: boolean = false;

  changeToLogin() {
    this.showRegister = false;
    this.showConnexion = true;
  }

  changeToRegister() {
    this.showRegister = true;
    this.showConnexion = false;

  }

  sendConnect(data: any) {
    console.log('ok');
    var reponse = this.connexionService.postData("POST", "http://localhost:3000/auth/login",
      { username: data.username, password: data.password }, true);
    if (localStorage.getItem("access_token") != null) {
      this.class = "messageGood";
      this.message = "Connexion réussi !";
      if (Number(localStorage.getItem("typeuser")) == 1) {
        this.appComponent.setIsAdmin(true)
      } else {
        this.appComponent.setIsAdmin(false)
      }
      setTimeout(() => {
        this.router.navigate(['accueil']);
        this.appComponent.connexion();
      }, 1000);
    } else {
      this.class = "messageBad";
      this.message = "Connexion failed !";
    }

  }

  inscriptionUser(data: any) {
    var reponse = this.connexionService.postData("POST", "http://localhost:3000/users",
      { firstname: data.firstname, lastname: data.name, phone: data.phone, email: data.email, address: "test", password: data.password, type: 1 }, false)
    if (reponse != null) {
      this.disable = true;
      this.class = "messageGood";
      this.message = "Inscription réussi !";
      setTimeout(() => {
        this.sendConnect({ "username": data.email, "password": data.password })
      }, 1000);
    } else {
      this.class = "messageBad";
      this.message = "Inscription failed !";
    }
  }



}
