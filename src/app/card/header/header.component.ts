import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIf],
  template: `
    <h1 *ngIf="level === 1">{{ heading }}</h1>
    <h2 *ngIf="level === 2">{{ heading }}</h2>
    <h3 *ngIf="level === 3">{{ heading }}</h3>
    <h1 *ngIf="cardHeadingLevel === 1">{{ cardHeading }}</h1>
    <h2 *ngIf="cardHeadingLevel === 2">{{ cardHeading }}</h2>
    <h3 *ngIf="cardHeadingLevel === 3">{{ cardHeading }}</h3>
  `,
  styles: [':host { @apply text-slate-700 select-none font-bold mb-8 }'],
})
export class HeaderComponent {
  @Input() heading?: string;
  @Input() level?: 1 | 2 | 3;
  @Input() cardHeadingLevel?: 1 | 2 | 3;
  @Input() cardHeading?: string;
}
