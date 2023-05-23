import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _favorites: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  get favorites$(): BehaviorSubject<any[]> {
    return this._favorites;
  }

  get favorites(): any[] {
    return this._favorites.getValue();
  }

  addFavorite(country: any) {
    const favorites = [...this.favorites];
    if (
      !favorites.some((existingCountry) => existingCountry.key === country.key)
    ) {
      favorites.push(country);
      this._favorites.next(favorites);
    }
  }
}
