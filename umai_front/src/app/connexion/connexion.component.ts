import { Component } from '@angular/core';
import { ConnexionService } from 'src/services/connexion/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(private connexionService: ConnexionService){

  }

  public showRegister: boolean = false;
  public showConnexion: boolean = true;
  public message:string = "";
  public class:string="";
  public disable:boolean = false;

  changeToLogin() {
    this.showRegister = false;
    this.showConnexion = true;
  }

  changeToRegister() {
    this.showRegister = true;
    this.showConnexion = false;

  }

  sendConnect(data:any) {
    this.connexionService.postData("POST", "http://localhost:3000/auth/login",
      { username: data.username, password: data.password })
      .then((elem: { access_token: any; }) => {
        var message = document.getElementById("message");
        if (elem.access_token) {
          this.class = "messageGood";
          this.message = "Connexion réussi !";
          localStorage.setItem('tokens', JSON.stringify(data));
          setTimeout(() => {
            document.location.href = "./listUser.html";
          }, 1000);
        } else {
          this.class = "messageBad";
          this.message = "Connexion failed !";
        }
      });
  }

  inscriptionUser(data:any) {
    this.connexionService.postData("POST", "http://localhost:3000/users",
      { firstname: data.firstname, lastname: data.name, phone: data.phone, email: data.email, password: data.password, type: 1 }, false)
      .then((elem: { ok: any; }) => {
        console.log("ok");
        var message = document.getElementById("message2")
        if (elem.ok) {
          var button = document.getElementById("signupButton");
          this.disable = true;
          this.class = "messageGood";
          this.message = "Inscription réussi !";
          setTimeout(() => {
            document.location.href = "./login.html";
          }, 1000);
        } else {
          this.class = "messageBad";
          this.message = "Inscription failed !";
        }
      });
      console.log(data);
  }


}
