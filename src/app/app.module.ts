import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenantComponent } from './Dashbord_admin/apprenant/apprenant.component';
import { DashbordProfesseurComponent } from './Dashbord_admin/dashbord-professeur/dashbord-professeur.component';
import { DashbordMatiereComponent } from './Dashbord_admin/dashbord-matiere/dashbord-matiere.component';
import { DashbordClasseComponent } from './Dashbord_admin/dashbord-classe/dashbord-classe.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserApprenantComponent } from './Utilisateur/user-apprenant/user-apprenant.component';
import { UserProfesseurComponent } from './Utilisateur/user-professeur/user-professeur.component';

import { HeaderDasboardComponent } from './Dashbord_admin/header-dasboard/header-dasboard.component';
import { DashbordStatistiqueComponent } from './Dashbord_admin/dashbord-statistique/dashbord-statistique.component';
import { MenuEleveProfComponent } from './menu-eleve-prof/menu-eleve-prof.component';
import { CouleurfondDirective } from './couleurfond.directive';
import { MenuEleveComponent } from './menu-eleve/menu-eleve.component';
import { ColorhoverDirective } from './colorhover.directive';
import { NoteComponent } from './Utilisateur/note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    ApprenantComponent,
    DashbordProfesseurComponent,
    DashbordMatiereComponent,
    DashbordClasseComponent,
    HeaderUserComponent,
    LoginpageComponent,
    UserApprenantComponent,
    UserProfesseurComponent,

    HeaderDasboardComponent,
    DashbordStatistiqueComponent,
    MenuEleveProfComponent,
    CouleurfondDirective,
    MenuEleveComponent,
    ColorhoverDirective,
    NoteComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
