import { Component } from '@angular/core';
import { CardComponent } from './shared/components/card';
import { ButtonComponent } from './shared/components/button';
import { HeadingComponent } from './shared/components/header';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, HeadingComponent, CardComponent, NgIf],
  template: `
    <app-heading>J'adore angular</app-heading>

    <app-button severity="error">Informations</app-button>

    <app-button *ngIf="!showCard" severity="success" (click)="toggleCard()">
      Afficher la card
    </app-button>

    <app-card *ngIf="showCard" heading="Ma super card !">
      <p>Coucou les amis <strong>Comment ça va ?</strong></p>

      <table>
        <thead>
          <tr>
            <th>Nom</th>

            <th>Prénom</th>

            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Vilbois</td>

            <td>Thibault</td>

            <td>42 ans</td>
          </tr>

          <tr>
            <td>Garcia</td>

            <td>Lucas</td>

            <td>26 ans</td>
          </tr>

          <tr>
            <td>Vilbois</td>

            <td>Johan</td>

            <td>11 ans</td>
          </tr>

          <tr>
            <td>Brochard</td>

            <td>Lisa</td>

            <td>45 ans</td>
          </tr>
        </tbody>
      </table>

      <a href="http://google.com">Aller sur Google</a>

      <ng-container cardFooter>
        <app-button severity="error" (click)="toggleCard()">Fermer</app-button>
      </ng-container>
    </app-card>
  `,
  styles: [
    ':host { @apply flex items-center justify-center flex-col gap-y-8 h-screen w-screen}',
  ],
})
export class AppComponent {
  showCard = true;

  toggleCard(): void {
    this.showCard = !this.showCard;
  }
}
