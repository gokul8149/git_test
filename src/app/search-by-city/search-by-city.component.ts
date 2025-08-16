import { Component, OnInit } from '@angular/core';
import { WeathersrviceService } from "../services/weathersrvice.service";
import { ShareDataService } from "../services/share-data.service";
@Component({
  selector: 'app-search-by-city',
  templateUrl: './search-by-city.component.html',
  styleUrls: ['./search-by-city.component.css']
})
export class SearchByCityComponent implements OnInit {
  weatherDataCity:any;
  isvalue:any=false;
  isSubmitted:any=true;
  city = {
    cityName: ""             //two way binding
  }
  constructor(private objw: WeathersrviceService,private share: ShareDataService) { }
  
  getCityName() {
    if (this.isSubmitted) {
      this.isSubmitted = false;
    }
    else {
      this.isSubmitted = true;
    }
    // console.log(this.city.cityName);
    this.objw.getWeatherDataByCityName(this.city.cityName).subscribe((rescity) => { //calling and subscribing getWeatherDataByCityName()
      //console.log(rescity);
      this.weatherDataCity = rescity;
      this.share.putWeatherDataByCity(this.weatherDataCity);
      this.isvalue=true;
      //console.log(this.weatherDataCity);
    })
  }

  ngOnInit(): void {
  }

}
