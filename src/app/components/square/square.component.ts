import { Component, Input } from '@angular/core';

@Component({
  selector: 'ttt-square',
  styles: [`button { width: 100%; height: 100%; font-size: 5em !important;}`],
  template: `<button type="button" class="btn" [ngClass]="getActiveClass()" [disabled]="disabled">{{ value }}</button>`,
})
export class SquareComponent {

  @Input() value: string;
  @Input() disabled = false;

  getActiveClass(): string {
    let className = 'btn-outline-secondary';
    if (this.value === 'X') {
      className = 'btn-outline-dark';
    } else if (this.value === 'O') {
      className = 'btn-outline-primary';
    }
    return className;
  }

}
