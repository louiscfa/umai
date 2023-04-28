import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AccesComponent } from './acces/acces.component';
import { PlatComponent } from './plat/plat.component';
import { ReservationAdminComponent } from './reservation-admin/reservation-admin.component';

const routes: Routes = [
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component: AccueilComponent},
  {path:'menu/:id', component:MenuComponent},
  {path:'plat/:id', component:PlatComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'profil', component:ProfilComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'acces', component:AccesComponent},
  {path:'admin/reservation', component:ReservationAdminComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private router: Router){}

  redirctToAccueil(){
    this.router.navigate(['/role']);
  }
 
}


