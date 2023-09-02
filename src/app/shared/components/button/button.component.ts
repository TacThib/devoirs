import { Component, Input } from '@angular/core';
import { Severity } from '../../types';

@Component({
  selector: 'app-button',
  standalone: true,
  template: ` <div [class]="severity"><ng-content /></div> `,
  styles: [
    'div { @apply h-16 w-36 flex items-center justify-center text-center bg-slate-200 hover:bg-slate-300 active:bg-slate-400 border-slate-900 border-solid cursor-pointer select-none p-4 rounded-xl}',
    '.error { @apply bg-red-500 hover:bg-red-600 active:bg-red-700 border-red-900 border-solid text-red-950 }',
    '.success { @apply bg-green-500 hover:bg-green-600 active:bg-green-700 border-green-900 border-solid text-green-950 }',
    '.info { @apply bg-teal-500 hover:bg-teal-600 active:bg-teal-700 border-teal-900 border-solid text-teal-950 }',
  ],
})
export class ButtonComponent {
  @Input() severity?: Severity;
}
