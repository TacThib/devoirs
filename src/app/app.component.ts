import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './card/button';
import { HeaderComponent } from './card/header';
import { CardComponent } from './card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent, HeaderComponent, CardComponent],
  template: ` <app-header [heading]="heading" [level]="1"></app-header>
    <app-button [severity]="severity" [text]="text"></app-button>
    <app-card
      [cardHeading]="cardHeading"
      [cardHeadingLevel]="2"
      [severity]="severity"
      [text]="cardButtonText"
    ></app-card>`,
  styles: [
    ':host { @apply inline-flex items-center justify-center flex-col h-screen w-screen}',
  ],
})
export class AppComponent {
  text = 'Informations';
  severity = 'info';
  heading = "J'adore angular";
  cardHeading = 'Ceci est une card';
  cardButtonText = 'Cliquez pour fermer';
}
