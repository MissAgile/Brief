import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordClasseComponent } from './dashbord-classe.component';

describe('DashbordClasseComponent', () => {
  let component: DashbordClasseComponent;
  let fixture: ComponentFixture<DashbordClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordClasseComponent]
    });
    fixture = TestBed.createComponent(DashbordClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
