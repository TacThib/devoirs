import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

export type Level = 1 | 2 | 3;

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  template: `
    <h1 *ngIf="level === 1"><ng-container *ngTemplateOutlet="heading" /></h1>
    <h2 *ngIf="level === 2"><ng-container *ngTemplateOutlet="heading" /></h2>
    <h3 *ngIf="level === 3"><ng-container *ngTemplateOutlet="heading" /></h3>

    <ng-template #heading><ng-content /></ng-template>
  `,
  styles: [':host { @apply text-slate-700 select-none font-bold}'],
})
export class HeadingComponent {
  @Input() level: Level = 1;
}
