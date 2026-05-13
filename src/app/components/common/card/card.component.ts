import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      [class]="
        'rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8 ' +
        className
      "
    >
      <div *ngIf="title || subtitle" class="mb-6">
        <p
          *ngIf="subtitle"
          class="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700"
        >
          {{ subtitle }}
        </p>
        <h2
          *ngIf="title"
          class="mt-2 text-2xl font-bold tracking-tight text-slate-950"
        >
          {{ title }}
        </h2>
      </div>
      <ng-content></ng-content>
    </section>
  `,
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() className = '';
}
