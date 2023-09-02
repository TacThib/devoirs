import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button';
import { HeadingComponent } from '../header';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HeadingComponent, ButtonComponent],
  template: `
    <app-heading [level]="2">{{ heading }}</app-heading>

    <div><ng-content /></div>

    <div class="footer"><ng-content select="[cardFooter]" /></div>
  `,
  styles: [
    ':host {@apply border-solid border-slate-700 rounded-xl p-4 flex flex-col gap-y-4 }',
    '.footer {@apply flex justify-end gap-x-4}',
  ],
})
export class CardComponent {
  @Input({ required: true }) heading?: string;
}
