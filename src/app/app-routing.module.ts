import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsListComponent } from './cars-list/cars-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { FormComponent } from './form/form.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewCarComponent } from './new-car/new-car.component';


const routes: Routes = [
  { path: "" , component: HomePageComponent },
  { path: "cars" , component: CarsListComponent },
  { path: "new-car" , component: NewCarComponent },
  { path: "drivers" , component: DriversListComponent },
  { path: "form" , component: FormComponent },
  { path: "not-found" , component: FourOhFourComponent },
  { path: "**" , redirectTo: "not-found"  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
