import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApprenantComponent } from './user-apprenant.component';

describe('UserApprenantComponent', () => {
  let component: UserApprenantComponent;
  let fixture: ComponentFixture<UserApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserApprenantComponent]
    });
    fixture = TestBed.createComponent(UserApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
