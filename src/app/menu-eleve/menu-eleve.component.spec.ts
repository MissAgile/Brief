import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEleveComponent } from './menu-eleve.component';

describe('MenuEleveComponent', () => {
  let component: MenuEleveComponent;
  let fixture: ComponentFixture<MenuEleveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuEleveComponent]
    });
    fixture = TestBed.createComponent(MenuEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
