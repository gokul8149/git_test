import { Component, OnInit } from '@angular/core';
import  * as  XLSX from 'xlsx';
import { ShareDataService } from "../services/share-data.service";
@Component({
  selector: 'app-excel-data',
  templateUrl: './excel-data.component.html',
  styleUrls: ['./excel-data.component.css']
})
export class ExcelDataComponent implements OnInit {
 weatherDataBycoords:any;
  controller:any=false;
  constructor(private share: ShareDataService) { }
  fileName="weather Data By Coords.xlsx";
  ngOnInit(): void {
    this.weatherDataBycoords = this.share.getWeatherDataByCoord();
  }
  exportExclCoordinateData(): void {
    let element = document.getElementById('weatherByCoordTable');   //passing the id of table
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb,this.fileName);
  }

}
