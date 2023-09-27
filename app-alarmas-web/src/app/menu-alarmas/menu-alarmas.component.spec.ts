import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlarmasComponent } from './menu-alarmas.component';

describe('MenuAlarmasComponent', () => {
  let component: MenuAlarmasComponent;
  let fixture: ComponentFixture<MenuAlarmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAlarmasComponent]
    });
    fixture = TestBed.createComponent(MenuAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
