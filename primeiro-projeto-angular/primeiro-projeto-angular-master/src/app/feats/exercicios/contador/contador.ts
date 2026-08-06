import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contador.css',
})
export class Contador {
  protected contador = signal<number>(0);

  private limiteImposto = 10;

  protected incrementarValor() {
    this.contador.update((valor) => valor + 1); /*O nome dentro do parenteses pode ser qualquer um*/
    this.checarValor();
  }

  private checarValor() {
    if (this.contador() > this.limiteImposto) {
      this.contador.set(0);
    }
  }

  protected redefinirValor() {
    this.contador.set(0);
  }
}
