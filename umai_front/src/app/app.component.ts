import { Component } from '@angular/core';
import { AppService } from './services/app/app.service';
import { Categorie } from './interface/categorie/categorie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'umai';
  public isLoggedIn: boolean = false;
  public categories: Categorie[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getData().subscribe(data => {
      this.categories = data;
    });
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
