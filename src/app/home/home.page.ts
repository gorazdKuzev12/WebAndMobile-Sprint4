// home.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
export interface Apartment {
  image: string;
  address: string;
  phoneNumber: string;
  // Add other properties as necessary
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  apartments$!: Observable<Apartment[]>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private db: AngularFireDatabase,
    private storage: Storage, // Add Storage to your constructor
    private navCtrl: NavController
  ) {
    this.initializeStorage();
  }

  async initializeStorage() {
    await this.storage.create();
  }

  ngOnInit() {
    this.apartments$ = this.db.list<Apartment>('apartments').valueChanges();
  }

  async onApartmentClick(apartment: Apartment) {
    await this.storage.set('selectedApartment', apartment);
    this.navCtrl.navigateForward('/detail');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
