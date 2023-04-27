import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'umai';
  public isLoggedIn: boolean = false;

  ngOnInit() {
    if (localStorage.getItem("access_token"))
      this.isLoggedIn = true;
  }

  public deconnexion() {
    localStorage.removeItem("access_token")
    this.isLoggedIn = false;
  }

  public connexion() {
    this.isLoggedIn = true;
  }
}
