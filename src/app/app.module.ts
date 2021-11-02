import { NgModule , LOCALE_ID} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CarItemComponent } from './cars-list/car-item/car-item.component';
import { FormsModule } from '@angular/forms';
import { DriverItemComponent } from './drivers-list/driver-item/driver-item.component';
import { FooterComponent } from './footer/footer.component';
import { BestDriversComponent } from './home-page/best-drivers/best-drivers.component';
import { BestCarsComponent } from './home-page/best-cars/best-cars.component';
import { NewCarComponent } from './new-car/new-car.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    DriversListComponent,
    HomePageComponent,
    FourOhFourComponent,
    CarItemComponent,
    DriverItemComponent,
    FooterComponent,
    BestDriversComponent,
    BestCarsComponent,
    NewCarComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
