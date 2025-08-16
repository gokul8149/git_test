import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExcelDataComponent } from './excel-data/excel-data.component';
import { ExcelDataByCityComponent } from './excel-data-by-city/excel-data-by-city.component';
import { SearchByCityComponent } from './search-by-city/search-by-city.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExcelDataComponent,
    ExcelDataByCityComponent,
    SearchByCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
