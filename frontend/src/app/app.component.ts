import {RouterModule} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {JobOfferService} from './job-offer.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <div class="container">
      <nav class="navbar navbar-expand navbar-light bg-light px-4 mb-4">
        <a routerLink="/offers" class="nav-link">📄 Lista</a>
        <a routerLink="/add" class="nav-link">➕ Dodaj</a>
      </nav>
      <router-outlet></router-outlet>
      <h3>Ilość wysłanych ofert: </h3>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'JobTracker';
  offersCount: number = 0;

  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit() {
    this.updateOffersCount();
  }

  updateOffersCount() {
    this.jobOfferService.getOffersCount().subscribe({
      next: (count) => {
        this.offersCount = count;
      },
      error: (error) => {
        console.error('Błąd podczas pobierania liczby ofert:', error);
      }
    });
  }
}
