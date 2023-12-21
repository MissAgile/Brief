import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordProfesseurComponent } from './dashbord-professeur.component';

describe('DashbordProfesseurComponent', () => {
  let component: DashbordProfesseurComponent;
  let fixture: ComponentFixture<DashbordProfesseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordProfesseurComponent]
    });
    fixture = TestBed.createComponent(DashbordProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
