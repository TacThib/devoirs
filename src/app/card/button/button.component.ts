import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <div [id]="severity">{{ text }}</div> `,
  styles: [
    'div { @apply h-16 w-36 m-2 flex items-center justify-center text-center bg-slate-200 hover:bg-slate-300 active:bg-slate-400 border-slate-900 border-solid cursor-pointer select-none p-4 rounded-xl}; #error { @apply bg-red-500 hover:bg-red-600 active:bg-red-700 border-red-900 border-solid text-red-950} #success { @apply bg-green-500 hover:bg-green-600 active:bg-green-700 border-green-900 border-solid text-green-950} #info { @apply bg-teal-500 hover:bg-teal-600 active:bg-teal-700 border-teal-900 border-solid text-teal-950}',
  ],
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() severity?: string;
  @Input() isHidden: boolean = false;
}
