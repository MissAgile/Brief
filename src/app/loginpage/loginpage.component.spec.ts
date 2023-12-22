import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';
import { UserserviceService } from '../serviceuser/userservice.service';

// ... autres dépendances


import { LoginpageComponent } from './loginpage.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let router: jasmine.SpyObj<Router>; // Mock pour Router
  let userService: jasmine.SpyObj<UserserviceService>; // Mock pour UserserviceService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginpageComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: Router, useValue: router },
        { provide: UserserviceService, useValue: userService }
      ]
    }).compileComponents();

    // component = TestBed.createComponent(LoginpageComponent);
    component.formData.email = 'example@email.com'; // Initialisez les données du formulaire
    component.formData.pass = 'password';
  });

  it('should redirect to the correct route when a valid user is found', () => {
  // userService.setUserId.and.returnValue(of(null)); // Mock la méthode setUserId
  //  

  component.usersdata = [{ id: '1', email: 'example@email.com', password: 'password', role: 1, etat: 1 }]; // Simulez les données utilisateur

  component.submitFunction(new Event('submit'));

  expect(component.affichermessage).toHaveBeenCalledWith('success', 'Bienvenu', 'example@email.com'); // Vérifiez le message
});
it('should display an error message when an invalid user is entered', () => {
  component.submitFunction(new Event('submit'));

  expect(component.affichermessage).toHaveBeenCalledWith('error', 'Oops', 'login ou Mot de passe Incorrecte');
});
  // ... tests
});