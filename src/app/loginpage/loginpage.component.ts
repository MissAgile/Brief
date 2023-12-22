import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserserviceService } from '../serviceuser/userservice.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{

  public Schooluser: any[] = [
    {
      id: '1',
      nom: 'bah',
      prenom:'habib',
      email: 'habib@gmail.com',
      password: 'habib',
      niveau: '',
      annee: '',
      role:'1',
      etat: '1',
      Matiere: [
        {
          id: '',
          matiere: '',
        }
      ]
    },
  ]

  public Matiere: any[] = [
    {
      id: '',
      matiere :""
    }
  ]

  public Classe: any[] = [
    {
      id: "",
      niveau: "",
      effectif:''
    }
  ]

  public Evaluation: any[] = [
    {
      id: '',
      semestre: '',
      date: '',
      type: '',
      etat: '',
      matiere: '',
      professeur: '',
      niveau: ''
    }
  ]

  public notes: any[] = [
    {
      id: '',
      apprenant: '',
      evaluation: '',
      professeur: '',
      matiere: '',
      semestre: '',
      Note: ''
    }
  ]

  formData = {
    email: '',
    pass: ''
  };


  constructor(private router: Router,private userService: UserserviceService) {
  }

  public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;

  public storeEvaluation: any;
  public userEvaluation: any;

  public storeNotes: any;
  public usersNotes: any

  public userid: any = 0;
  public userfoundid: any;
  public useretat: any;

   ngOnInit(): void {
     this.storedUsers = localStorage.getItem('Schooluser');
       if (this.storedUsers) {
         this.usersdata = JSON.parse(this.storedUsers);
       } else {
         // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
         localStorage.setItem('Schooluser', JSON.stringify(this.Schooluser));
     }
 
     this.storeMatiere = localStorage.getItem('Matiere');
       if (this.storedUsers) {
         this.usersMat = JSON.parse(this.usersMat);
         console.log('this.usersMat');
       } else {
         // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
         localStorage.setItem('Matiere', JSON.stringify(this.Matiere));
     }

     this.storeclasse = localStorage.getItem('Classe');
       if (this.storeclasse) {
         this.userClasse = JSON.parse(this.userClasse);
       } else {
         // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
         localStorage.setItem('Classe', JSON.stringify(this.Classe));
     }

     this.storeEvaluation = localStorage.getItem('Evaluation');
       if (this.storeEvaluation) {
         this.userEvaluation = JSON.parse(this.userEvaluation);
       } else {
         // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
         localStorage.setItem('Evaluation', JSON.stringify(this.Evaluation));
     }

     this.storeNotes = localStorage.getItem('notes');
       if (this.storeEvaluation) {
         this.usersNotes = JSON.parse(this.usersNotes);
       } else {
         // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
         localStorage.setItem('notes', JSON.stringify(this.notes));
     }

  }


  submitFunction(event: Event):void {
    event.preventDefault();
    if(this.formData.email !== '' && this.formData.pass !== '') {
      let email = this.formData.email
      let pass = this.formData.pass;

      let datastring = localStorage.getItem('Schooluser');
      let existingData = datastring ? JSON.parse(datastring) : [];
      // @ts-ignore
      let userFound = this.usersdata.find(usersdata => usersdata.email === this.formData.email && usersdata.password === this.formData.pass);
      console.log(userFound)

      // console.log(userFound)
      this.userfoundid = userFound.id
      let useretat = this.userfoundid.role;

      if (userFound) {
        this.affichermessage('success','Bienvenu',userFound.email)
        if (userFound.role == 1 && userFound.etat==1) {
          this.router.navigate(['/administration/statistique', this.userfoundid]);
          this.userService.setUserId(userFound.id);//on le redirige vers la page accueil
        }else if(userFound.role == 2 && userFound.etat==1){
          this.router.navigate(['/EspaceProf/',this.userfoundid]); //on le redirige vers la page accueil
        }else if(userFound.role == 3 && userFound.etat == 1) {
          this.router.navigate(['/EspaceApprenant/',this.userfoundid]);
        }else{
          this.affichermessage('error','Oops',' Ce Compte a été desactivé!')
        }
      }else{
        this.affichermessage('error','Oops',' login ou Mot de passe Incorrecte')
      }
    }else{
      this.affichermessage('error','Oops',' Les Informations que vous avez saisies sont incorrectes!')
    }
  }

  affichermessage(icone: any, message: string,user:string) {
    Swal.fire({
        position: 'center',
        icon: icone,
        title: message +"" +user,
        showConfirmButton: true,
        // timer: 1500
    })
  }
}
