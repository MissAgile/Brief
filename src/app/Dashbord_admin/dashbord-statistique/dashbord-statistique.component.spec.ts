import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordStatistiqueComponent } from './dashbord-statistique.component';

describe('DashbordStatistiqueComponent', () => {
  let component: DashbordStatistiqueComponent;
  let fixture: ComponentFixture<DashbordStatistiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordStatistiqueComponent]
    });
    fixture = TestBed.createComponent(DashbordStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
