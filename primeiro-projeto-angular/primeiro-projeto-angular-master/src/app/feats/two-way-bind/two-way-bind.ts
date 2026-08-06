import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-bind',
  imports: [FormsModule],
  templateUrl: './two-way-bind.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './two-way-bind.css',
})
export class TwoWayBind {
  nome = '';
}
