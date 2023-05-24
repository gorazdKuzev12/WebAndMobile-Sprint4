import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

interface Apartment {
  image: string;
  address: string;
  // Add other properties as necessary
}

@Component({
  selector: 'app-apartment-favorite',
  templateUrl: 'apartment-favorite.page.html',
  styleUrls: ['apartment-favorite.page.scss'],
})
export class ApartmentFavoritePage {
  favoriteApartments$!: Observable<Apartment[]>;

  constructor(private storage: Storage) {}

  async ionViewWillEnter() {
    const favorites = await this.storage.get('favorites');
    this.favoriteApartments$ = favorites ? of(favorites) : of([]);
  }
}
