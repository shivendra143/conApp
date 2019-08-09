import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { CountryHeaderComponent } from './countries/country-header/country-header.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryHeaderComponent,
    CountryListComponent,
    CountryDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
