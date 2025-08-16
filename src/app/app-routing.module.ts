import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExcelDataComponent } from './excel-data/excel-data.component';
import { ExcelDataByCityComponent } from './excel-data-by-city/excel-data-by-city.component';
import { SearchByCityComponent } from './search-by-city/search-by-city.component';


const routes: Routes = [{path:"ExcelData",component:ExcelDataComponent},{path:"SearchCity",component:SearchByCityComponent},{path:"ExcelDataCityName",component:ExcelDataByCityComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
