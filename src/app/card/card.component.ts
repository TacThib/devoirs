import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ButtonComponent } from './button';
import { HeaderComponent } from './header';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, HeaderComponent, NgIf],
  template: `
    <app-button
      [severity]="severity"
      text="Afficher la card"
      *ngIf="isHidden"
      (click)="changeCardState()"
    ></app-button>
    <div [id]="severity" *ngIf="isHidden === false">
      <app-header
        [cardHeading]="cardHeading"
        [cardHeadingLevel]="cardHeadingLevel"
      ></app-header>
      <p [class]="severity">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ut
        voluptate minima commodi, pariatur aut hic ea error possimus totam autem
        sed, quidem, iste atque enim id saepe deserunt quas.
      </p>
      <app-button
        [severity]="severity"
        [text]="text"
        (click)="changeCardState()"
      ></app-button>
    </div>
  `,
  styles: [
    'div { @apply mt-8 h-96 w-96 inline-flex flex-col border-solid border-slate-800 rounded-xl; app-header {@apply m-4 p-2 w-56 border-solid border-slate-600 rounded-xl}; p{@apply p-2 text-xl }; .success {@apply text-green-700 } .info{@apply text-teal-700 } .error{@apply text-red-700 }; app-button{@apply ml-48}; #error {@apply bg-red-400}; #info{@apply bg-teal-400}; #success{@apply bg-green-400}}',
  ],
})
export class CardComponent {
  @Input() cardHeading?: string;
  @Input() cardHeadingLevel?: 1 | 2 | 3;
  @Input() severity?: string;
  @Input() text?: string;

  @Input() isHidden: boolean = false;
  changeCardState() {
    this.isHidden = !this.isHidden;
  }
}
