import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/serviceuser/userservice.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashbord-professeur',
  templateUrl: './dashbord-professeur.component.html',
  styleUrls: ['./dashbord-professeur.component.css']
})
export class DashbordProfesseurComponent {


  // variable utilisé pour stocké nos localStorage
  public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;

  public storeEvaluation: any;
  public userEvaluation: any;

  public storeNotes: any;
  public usersNotes: any;

  public detailenseignant: any;
  public userFound: any;

  public xuser: any=0;
  // Fin variable

  // variable utilisé pour stocker les id des users
  userid: any;
  userfoundid: any;
  existingData: any;

  // forme register dans le ngModel
  formDataregister = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    matiere: '',
    niveau:''
  }

  // Constructeur qui nous permet de naviguer et d'utiliser nos services
  constructor(private router: Router, private userService: UserserviceService) {
  }

  // la methode ngOnInit dans la quelle on recupere notre tableau d'objet
  ngOnInit(): void {
    this.storedUsers = localStorage.getItem('Schooluser');
    if (this.storedUsers) {
      this.usersdata = JSON.parse(this.storedUsers);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      localStorage.setItem('Schooluser', JSON.stringify(this.usersdata));
    }
  }

  Registerfunction(event: Event) {
    event.preventDefault();
    if (this.formDataregister.nom !== '' && this.formDataregister.prenom !== '' && this.formDataregister.email !== '' && this.formDataregister.password !== '' && this.formDataregister.matiere != "") {

      this.userid = this.usersdata.length;
      let nomprof = this.formDataregister.nom
      let prenomprof = this.formDataregister.prenom;
      let emailprof = this.formDataregister.email;
      let passwordprof = this.formDataregister.password;
      let matiereProf = this.formDataregister.matiere;
      let niveauProf = this.formDataregister.niveau;

      this.usersdata.push({
        id: this.usersdata.length + 1,
        nom: nomprof,
        prenom: prenomprof,
        email: emailprof,
        password: passwordprof,
        niveau: niveauProf,
        annee: '',
        role: '2',
        etat: '1',
        Matiere: [
          {
            id:this.usersdata.length+1,
            matiere: matiereProf
          }
        ]
      });
      localStorage.setItem('Schooluser', JSON.stringify(this.usersdata));
      // window.location.reload();
    }
  }


  Detail(id: any){
    this.xuser++;
    // @ts-ignore
    this.userFound = this.usersdata.find(usersdata => usersdata.id === id);
    if (this.userFound) {
     return this.userFound;
    }
  }


  desactive(id: any) {
    let desactiveid = id;
    Swal.fire({
      title: "Voulez vous vraiment desactivé ce compte?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui,j'approuve!"
    }).then((result) => {
      if (result.isConfirmed) {
      let datastring = localStorage.getItem('Schooluser');
      let existingData = datastring ? JSON.parse(datastring) : [];
      // @ts-ignore
      let userFound = this.usersdata.find(usersdata => usersdata.id === desactiveid);
      if (userFound) {
        userFound.etat = '0';
        localStorage.setItem('Schooluser', JSON.stringify(this.usersdata));
        // console.log(existingData)
      }
      Swal.fire({
      title: "Compte desactivé!",
      text: "Ce Utilisateur a été desactivé .",
      icon: "success"
      });
    }
    });
  }
}
