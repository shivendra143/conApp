import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  {
    path: 'countries',
    component: CountriesComponent,
    children: [
      { path: ':id',
         component: CountryDetailsComponent
      },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'shopping-add', component: ShoppingEditComponent }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
