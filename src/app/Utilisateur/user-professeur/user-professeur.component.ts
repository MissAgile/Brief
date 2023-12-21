import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-professeur',
  templateUrl: './user-professeur.component.html',
  styleUrls: ['./user-professeur.component.css']
})
export class UserProfesseurComponent implements OnInit {
 
  public Evaluation: any[] = [];

  // public Evaluation: any[] = [
  //   {
  //     id: '',
  //     semestre: '',
  //     date: '',
  //     type: '',
  //     etat: '',
  //     matiere: '',
  //     professeur: '',
  //     niveau: ''
  //   }
  // ]
  public classes:  any[] = [
    {
      id: '',
      prenom: '',
      nom: '',
      nomClasse: '',
      noteEleve: '',

    
    }
  ]



  /**tous les  varibles  */
  public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;

  public storeEvaluation: any;
  public userEvaluation: any;
  // public addEvaluation: any;

  public storeNotes: any;
  public usersNotes: any

  public userid: any = 0;
  public userfoundid: any;
  public useretat: any;


  public classUser: any;

  

  //valeur du filter qui correspond a celui du champs recherche
  filterValue = '';
  //les element trouver
  filteredElement:any;


addProf: any={};
dataEvaluation : any;

//variable classe
maClasse: any={};
dataClasse : any;
  ngOnInit(): void {
    console.log(this.storedUsers);
    this.storedUsers = localStorage.getItem('Schooluser');
    console.log(this.storedUsers);
     if (this.storedUsers) {
       this.usersdata = JSON.parse(this.storedUsers);
     } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   }

   this.storeMatiere = localStorage.getItem('Matiere');
     if (this.storedUsers) {

      this.usersMat = JSON.parse(this.storeMatiere);
    } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   }
   

   this.storeclasse = localStorage.getItem('Classe');
     if (this.storeclasse) {
      this.userClasse = JSON.parse(this.userClasse);
     } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   }
   
    this.dataEvaluation = localStorage.getItem('evalue');
    if (this.dataEvaluation) {
      this.Evaluation = JSON.parse(this.dataEvaluation);
    }
   
   //localStorage classes
   const dataClasse = localStorage.getItem('classe');
if(dataClasse){
this.classes = JSON.parse(dataClasse);
}
   else {
          localStorage.setItem('classe', JSON.stringify(this.classes));
   }
  

}


addEvaluation(){

  this.addProf.id = this.Evaluation.length + 1;
  this.Evaluation.push(this.addProf);
  this.saveEvaluation();   /**Assurez-vous d'appeler cette fonction après l'ajout */
  this.addProf ={};
 
 }
 
 saveEvaluation(){
   localStorage.setItem('evalue', JSON.stringify(this.Evaluation));
 }

   // Methode de recherche automatique 
   onSearch(){
    // Recherche se fait selon le nom ou le prenom 
    this.filteredElement = this.Evaluation.filter(
      (elt:any) => (elt?.matiere.toLowerCase().includes(this.filterValue.toLowerCase())) || elt?.date.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  //recuperation des objets de la classe
  
  addeClasse(){
    this.classes.push(this.maClasse);
    this.saveClasse();
    this.maClasse ={};
   
   }
   
   saveClasse(){
     localStorage.setItem('classe', JSON.stringify(this.classes));
   }
}






  //  test


   
    

