import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-statistique',
  templateUrl: './dashbord-statistique.component.html',
  styleUrls: ['./dashbord-statistique.component.css']
})
export class DashbordStatistiqueComponent implements OnInit {

  public storedUsers: any;
  public usersdata: any;
  public tailleenseignant: any;
  public tailleApprenant: any;
  public tailleMatiere: any;
  public tailleClasse: any;


  ngOnInit(): void {
    this.storedUsers = localStorage.getItem('Schooluser');
    if (this.storedUsers) {
      this.usersdata = JSON.parse(this.storedUsers);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      localStorage.setItem('Schooluser', JSON.stringify(this.usersdata));
    }
    // console.log(this.usersdata[0].role);
    this.tailleenseignant = this.enseignantLength();
    this.tailleApprenant = this.ApprenantLength();
    this.tailleMatiere = this.MatiereLength();
    this.tailleClasse = this.MatiereLength();

  }


  enseignantLength() {
    let enseignanttaille = 0;
    for (let i = 0; i < this.usersdata.length; i++){
      if (this.usersdata[i].role == 2) {
        enseignanttaille ++;
      }
    }
    return enseignanttaille;
  }

  ApprenantLength() {
    let Apprenanttaille = 0;
    for (let i = 0; i < this.usersdata.length; i++){
      if (this.usersdata[i].role == 3) {
        Apprenanttaille ++;
      }
    }
    return Apprenanttaille;
  }

  MatiereLength() {
    let MatiereTaille = 0;
    for (let i = 0; i < this.usersdata.length; i++){
      if (this.usersdata[i].role == 3) {
        MatiereTaille ++;
      }
    }
    return MatiereTaille;
  }

  ClasseLength() {
    let Classetaille = 0;
    for (let i = 0; i < this.usersdata.length; i++){
      if (this.usersdata[i].role == 3) {
        Classetaille ++;
      }
    }
    return Classetaille;
  }

}
