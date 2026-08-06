import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  imports: [],
  templateUrl: './autenticacao.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './autenticacao.css',
})
export class Autenticacao {
  protected logado = signal<boolean>(false);

  protected alterarEstado() {
    this.logado.update((estado) => !estado);
  }
}
