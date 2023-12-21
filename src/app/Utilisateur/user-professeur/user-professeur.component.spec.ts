import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfesseurComponent } from './user-professeur.component';

describe('UserProfesseurComponent', () => {
  let component: UserProfesseurComponent;
  let fixture: ComponentFixture<UserProfesseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfesseurComponent]
    });
    fixture = TestBed.createComponent(UserProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
