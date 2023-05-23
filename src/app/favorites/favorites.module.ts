import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import { CountryService } from '../services/country.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FavoritesPageRoutingModule],
  declarations: [FavoritesPage],
  providers: [], // Remove the service from here
})
export class FavoritesPageModule {}
