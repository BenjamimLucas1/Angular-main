import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosFavoritos } from './alunos-favoritos';

describe('AlunosFavoritos', () => {
  let component: AlunosFavoritos;
  let fixture: ComponentFixture<AlunosFavoritos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunosFavoritos],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunosFavoritos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
