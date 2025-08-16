import { Component, OnInit } from '@angular/core';
import  * as  XLSX from 'xlsx';
import { ShareDataService } from "../services/share-data.service";
@Component({
  selector: 'app-excel-data-by-city',
  templateUrl: './excel-data-by-city.component.html',
  styleUrls: ['./excel-data-by-city.component.css']
})
export class ExcelDataByCityComponent implements OnInit {
  weatherDataCity:any;
  constructor(private share:ShareDataService) { 
    
  }
  fileName="weather Data.xlsx";
  
  ngOnInit(): void {
     console.log(this.weatherDataCity);
  }
  invoke(){
    this.weatherDataCity=this.share.getWeatherDataByCity();
   console.log("")
    this.exportExclCityData();
  }
  exportExclCityData(): void {
   
    let element = document.getElementById('weatherByCityTable');   //passing the id of table
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb,this.fileName);
  }

}
