import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  imports: [],
  templateUrl: './prop-binding.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './prop-binding.css',
})
export class PropBinding {
  naoHabilitado = false;
}
