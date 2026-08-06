import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lista-alunos',
  imports: [],
  templateUrl: './lista-alunos.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './lista-alunos.css',
})
export class ListaAlunos {
  alunos = ['Jordan', 'Gregory', 'Eduardo', 'Matheus', 'Henrique', 'Rafael', 'Rodrigo', 'Nathan'];
}
