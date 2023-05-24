import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

interface Apartment {
  image: string;
  address: string;
  phoneNumber: string;

  // Add other properties as necessary
}

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage implements OnInit {
  apartment!: Apartment;

  constructor(
    private route: ActivatedRoute,
    private storage: Storage,
    private db: AngularFireDatabase,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    this.apartment = await this.storage.get('selectedApartment');
  }

  async addToFavorites() {
    const favorites = (await this.storage.get('favorites')) || [];
    favorites.push(this.apartment);
    await this.storage.set('favorites', favorites);
  }

  navigateToFavorites() {
    this.navCtrl.navigateForward('/apartament-favorite');
  }
}
