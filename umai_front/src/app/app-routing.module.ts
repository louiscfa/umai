import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AccesComponent } from './acces/acces.component';

const routes: Routes = [
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component: AccueilComponent},
  {path:'menu', component:MenuComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'profil', component:ProfilComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'acces', component:AccesComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private router: Router){}

  redirctToAccueil(){
    this.router.navigate(['/role']);
  }
 
}


