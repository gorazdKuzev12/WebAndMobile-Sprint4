import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartmentFavoritePageRoutingModule } from './apartment-favorite-routing.module';

import { ApartmentFavoritePage } from './apartment-favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApartmentFavoritePageRoutingModule
  ],
  declarations: [ApartmentFavoritePage]
})
export class ApartmentFavoritePageModule {}
