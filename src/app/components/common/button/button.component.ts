import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [class]="classes" [disabled]="disabled" (click)="onClick()">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() className = '';
  @Input() disabled = false;

  get classes(): string {
    const baseStyles =
      'px-4 py-2 rounded-full font-semibold transition-colors duration-200';
    const variants = {
      primary: 'bg-slate-950 text-white hover:bg-slate-800',
      secondary: 'bg-sky-100 text-sky-900 hover:bg-sky-200',
      danger: 'bg-red-100 text-red-900 hover:bg-red-200',
    };
    return `${baseStyles} ${variants[this.variant]} ${this.className}`;
  }

  onClick() {
    // Event handling
  }
}
