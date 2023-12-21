import { Component , OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashbord-matiere',
  templateUrl: './dashbord-matiere.component.html',
  styleUrls: ['./dashbord-matiere.component.css']
})
export class DashbordMatiereComponent implements OnInit {

  public Matiere: any[] = [
    {
      id: '',
      matiere :""
    }
  ]

  public storeMatiere: any;
  public usersMat: any;

  
  public storedUsers: any;
  public usersdata: any;


  matieres: string="";
 
   ngOnInit(): void {
    

     this.storeMatiere = localStorage.getItem('Matiere');
       if (this.storedUsers) {
         this.usersMat = JSON.parse(this.usersMat);
       } else {
         // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
         localStorage.setItem('Matiere', JSON.stringify(this.Matiere));
     }

     
  }
  ajouterMatiere(){
    let classe = {
     id: this.Matiere.length ++,
     niveau:this.Matiere,
     
   }
 

     // On ajoute l'objet dans la liste des classes
  
     this.usersMat.push(this.Matiere);
     console.log(this.Matiere);

    //  console.log(this.niveauClasse);
    //  console.log(this.userClasse);
    //  console.log(this.classe);




     // localStorage.setItem('classe', JSON.stringify(this.classe));
     localStorage.setItem('Matiere', JSON.stringify(this.usersMat));

      // Ferme le popup si on click sur Ok 
      Swal.fire({
       title: "Felicitation!",
       text: "Classe Ajouter avec Succés ",
       icon: "success",
     });
   }
    

     
   }




