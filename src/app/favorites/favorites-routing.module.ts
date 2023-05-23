import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPage } from './favorites.page'; // Update the import statement

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage, // Update the component declaration
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPageRoutingModule {}
