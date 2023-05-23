import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {
  favorites: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.favorites$.subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  logFavorites() {
    console.log(this.favorites);
  }
}
