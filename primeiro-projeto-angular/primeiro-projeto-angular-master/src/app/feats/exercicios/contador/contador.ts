import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  protected contador: number = 0;

  private limiteImposto = 10;

  protected incrementarValor() {
    this.contador++;
  }

  private checarValor() {
    if (this.contador > 10) {
      this.contador = 0;
    }
  }

  protected redefinirValor() {
    this.contador = 0;
  }
}
