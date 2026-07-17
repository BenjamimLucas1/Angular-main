import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuResponsivo } from './menu-responsivo';

describe('MenuResponsivo', () => {
  let component: MenuResponsivo;
  let fixture: ComponentFixture<MenuResponsivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuResponsivo],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuResponsivo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
