import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }
  weatherDataByCoord:any;
  weatherDataCity:any;
  putWeatherData(WeatherData:any){
    this.weatherDataByCoord=WeatherData;
  }
  getWeatherDataByCoord(){
    return(this.weatherDataByCoord)
  }
  putWeatherDataByCity(weatherDataCity:any){
    this.weatherDataCity=weatherDataCity;
    //console.log(this.weatherDataCity);
  }
  getWeatherDataByCity(){
    return(this.weatherDataCity)
  }
}
