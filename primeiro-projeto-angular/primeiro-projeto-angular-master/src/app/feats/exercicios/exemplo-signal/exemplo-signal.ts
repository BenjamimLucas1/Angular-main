import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exemplo-signal',
  imports: [],
  templateUrl: './exemplo-signal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './exemplo-signal.css',
})
export class ExemploSignal {
  idade = signal(24);

  mudarValor() {
    this.idade.set(20);
  }

  incrementarIdade() {
    this.idade.update((atual) => atual + 1);
  }
}
