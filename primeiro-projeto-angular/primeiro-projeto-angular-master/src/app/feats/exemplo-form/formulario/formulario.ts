import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Produto } from './produto';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
  templateUrl: './formulario.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './formulario.css',
})
export class Formulario {

  produtoModel = signal<Produto>({
    titulo: '',
    descricao: '',
    preco: null,
  });

  produtoForm = form(this.produtoModel);

  produtos = signal<Produto[]>([]);

  cadastrarProduto(event: SubmitEvent) {
    event.preventDefault();

    const produto = this.produtoModel();

    console.log(produto);

    this.produtos.update(valor => [...valor, produto]);

    alert('Produto cadastrado!')

    this.produtoModel.set({
    titulo: '',
    descricao: '',
    preco: null,
  })
  }
}
