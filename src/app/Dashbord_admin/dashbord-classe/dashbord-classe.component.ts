import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-dashbord-classe',
  templateUrl: './dashbord-classe.component.html',
  styleUrls: ['./dashbord-classe.component.css']
})
export class DashbordClasseComponent implements OnInit {

  public userClasse: any;
  // la variable qui permet de boucler notre tableau 
 
// le dernier classe qui est ajouter 
  // idDernierClasse: number = 0;


  idClasse:number= 0;
  niveauClasse: string="";
  effectifClasse:string="";
 
  public classe: any[] = [
    {
      id: "",
      niveau: "",
      effectif:''
    }
  ]



ngOnInit(): void {

  
  this.storeclasse = localStorage.getItem('classe');
  if (this.storeclasse) {
    this.userClasse = JSON.parse(localStorage.getItem("classe") || "[]");
    console.log(this.userClasse)
  } else {
    // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
    localStorage.setItem('classe', JSON.stringify(this.classe));
}

}


public storeclasse: any;
  ajouterClasse(){
     let classe = {
      id: this.classe.length ++,
      niveau:this.niveauClasse,
      effectif:this.effectifClasse,
    }
  
 
      // On ajoute l'objet dans la liste des classes
   
      this.userClasse.push(classe);

      console.log(this.niveauClasse);
      console.log(this.userClasse);
      console.log(this.classe);




      // localStorage.setItem('classe', JSON.stringify(this.classe));
      localStorage.setItem('classe', JSON.stringify(this.userClasse));

       // Ferme le popup si on click sur Ok 
       Swal.fire({
        title: "Felicitation!",
        text: "Classe Ajouter avec Succés ",
        icon: "success",
      });
    }

     


      // On vide les champs 
      // this.viderChapmsClasse();
      //   // localStorage.setItem('classe', JSON.stringify(this.classe));
      //   localStorage.setItem('classe', JSON.stringify(this.userClasse));
      
    // }
  }


 