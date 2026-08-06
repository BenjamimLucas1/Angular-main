import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-exemplo-form',
  imports: [Formulario],
  templateUrl: './exemplo-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './exemplo-form.css',
})
export class ExemploForm {}
