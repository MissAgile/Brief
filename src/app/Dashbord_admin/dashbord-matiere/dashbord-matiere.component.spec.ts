import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordMatiereComponent } from './dashbord-matiere.component';

describe('DashbordMatiereComponent', () => {
  let component: DashbordMatiereComponent;
  let fixture: ComponentFixture<DashbordMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordMatiereComponent]
    });
    fixture = TestBed.createComponent(DashbordMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
