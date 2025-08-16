import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeathersrviceService {
  url = "https://api.openweathermap.org/data/2.5/weather?"; //api link
  apikey = "e327d3c49915ec6e7d3299c1bf0b53f9"; //api key
  weatherData: any;
  requredData: any;
  constructor(private http: HttpClient) { }
  getWeatherDataByCordinates(lat: any, lng: any) {  //function to fetch data 
    //console.log(" serice  lat " ,lat ," longitude", lng);
    let params = new HttpParams() //setting the api parameter
      .set('lat', lat)
      .set('lon', lng)
      .set('units', "metric")
      .set('appid', this.apikey)
    return (this.http.get<any>(this.url, { params }));  //api call to fetch data using co ordinates value
  }
  getWeatherDataByCityName(cityName: any) {
    let params = new HttpParams()  //setting api parameters
      .set('q', cityName)
      .set('units', "metric")
      .set('appid', this.apikey)
    return (this.http.get<any>(this.url, { params }));  //api call to fetch data using city name
  }

}
