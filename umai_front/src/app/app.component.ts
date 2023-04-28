import { Component, ViewChild } from '@angular/core';
import { AppService } from './services/app/app.service';
import { Categorie } from './interface/categorie/categorie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'umai';
  public isLoggedIn: boolean = false;
  public categories: Categorie[] = [];
  isAdmin:boolean = false;

  constructor(private appService: AppService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.appService.getData().subscribe(data => {
      this.categories = data;
    });
    if (localStorage.getItem("access_token"))
      this.isLoggedIn = true;
  }

  public deconnexion() {
    localStorage.removeItem("access_token")
    localStorage.removeItem("userId")
    localStorage.removeItem("typeuser")
    this.isAdmin = false;
    this.isLoggedIn = false;
  }

  public connexion() {
    this.isLoggedIn = true;
  }

  public refreshMenus(categorieId:number) {
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   this.router.navigate(['/menu/'+categorieId]),{relativeTo: this.route}
  }

  setIsAdmin(isAdmin:boolean){
    this.isAdmin = isAdmin;
  }
}
