import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartmentFavoritePage } from './apartment-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: ApartmentFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmentFavoritePageRoutingModule {}
