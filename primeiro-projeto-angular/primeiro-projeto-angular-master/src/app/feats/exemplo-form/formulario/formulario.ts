import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Produto } from './produto/produto';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  produtoModel = signal<Produto>({
    titulo: '',
    descricao: '',
    preco: null
  })
  produtoForm = form(this.produtoModel);
}
