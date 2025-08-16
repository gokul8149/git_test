import { Component, OnInit } from '@angular/core';
import { WeathersrviceService } from "../services/weathersrvice.service";
import { ShareDataService } from "../services/share-data.service";

import * as XLSX from 'xlsx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fileName='weatherDataExcel.xlsx';
  weatherData: any;                          //to recive data searched by co ordinates
  weatherDataCity: any;                      //to recive data searched by city name
  data: any;
  lat: any;                 //lattitude
  lng: any;                 //longitude
  
  isSubmitted: boolean = false;
  cityNotFound = "";
  constructor(private objw: WeathersrviceService,private share: ShareDataService) {}

  ngOnInit(): void {
    if ("geolocation" in navigator) {                      //block of satatements to fetch current location of device
      navigator.geolocation.watchPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // console.log("lattitude =",this.lat, " and longitude= ", this.lng);
        //calling and subscriming getWeatherDataByCordinates()
          // console.log(res);
          this.weatherData = res;
          this.share.putWeatherData(this.weatherData);
          // console.log(this.weatherData);
        })        
      });
    } 
    else {
      console.log("User not allow");
    }
  }
  // getCityName() {
  //   if (this.isSubmitted) {
  //     this.isSubmitted = false;
  //   }
  //   else {
  //     this.isSubmitted = true;
  //   }
  //   // console.log(this.city.cityName);
  //   this.objw.getWeatherDataByCityName(this.city.cityName).subscribe((rescity) => { //calling and subscribing getWeatherDataByCityName()
  //     //console.log(rescity);
  //     this.weatherDataCity = rescity;
  //     this.share.putWeatherDataByCity(this.weatherDataCity);
  //     //console.log(this.weatherDataCity);
  //   })
  // }
 
}


