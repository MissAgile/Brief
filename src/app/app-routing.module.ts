import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderDasboardComponent } from './Dashbord_admin/header-dasboard/header-dasboard.component';
import { DashbordStatistiqueComponent } from './Dashbord_admin/dashbord-statistique/dashbord-statistique.component';
import { ApprenantComponent } from './Dashbord_admin/apprenant/apprenant.component';
// import { UserProfesseurComponent } from './Utilisateur/user-professeur/user-professeur.component';
import { DashbordMatiereComponent } from './Dashbord_admin/dashbord-matiere/dashbord-matiere.component';
import { DashbordClasseComponent } from './Dashbord_admin/dashbord-classe/dashbord-classe.component';
import { DashbordProfesseurComponent } from './Dashbord_admin/dashbord-professeur/dashbord-professeur.component';
import { UserProfesseurComponent } from './Utilisateur/user-professeur/user-professeur.component';
import { UserApprenantComponent } from './Utilisateur/user-apprenant/user-apprenant.component';


const routes: Routes = [
  { path: '', component: LoginpageComponent },
  // { path: 'login', component: LoginpageComponent },
  { path: 'administration/statistique/:id', component: DashbordStatistiqueComponent },
  { path: 'professeur/:id', component: DashbordStatistiqueComponent },
  { path: 'administration/Gestion-apprenant/:id', component: ApprenantComponent },
  { path: 'administration/Gestion-enseignant/:id', component: DashbordProfesseurComponent },
  { path: 'administration/Gestion-matiere/:id', component: DashbordMatiereComponent },
  { path: 'administration/Gestion-classe/:id', component: DashbordClasseComponent },
  { path: 'EspaceProf/:id', component: UserProfesseurComponent },
  { path: 'EspaceApprenant/:id', component: UserApprenantComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
