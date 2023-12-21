import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEleveProfComponent } from './menu-eleve-prof.component';

describe('MenuEleveProfComponent', () => {
  let component: MenuEleveProfComponent;
  let fixture: ComponentFixture<MenuEleveProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuEleveProfComponent]
    });
    fixture = TestBed.createComponent(MenuEleveProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
