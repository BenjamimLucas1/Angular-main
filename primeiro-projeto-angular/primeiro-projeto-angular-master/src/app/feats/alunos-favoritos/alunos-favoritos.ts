import { Component } from '@angular/core';
import { ListaAlunos } from "./lista-alunos/lista-alunos";

@Component({
  selector: 'app-alunos-favoritos',
  imports: [ListaAlunos],
  templateUrl: './alunos-favoritos.html',
  styleUrl: './alunos-favoritos.css',
})
export class AlunosFavoritos {}