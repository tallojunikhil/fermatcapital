import { Component } from '@angular/core';
import { Bonds } from './classes/bonds';
// import { PortfolioCodes } from './portfoliocode';
import { DataService } from "./classes/DataService";
import { GridOptions } from "ag-grid";
import { Http } from '@angular/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  dateObj: number = Date.now();
  buildNumber = '0.0.0';
   constructor(){

  }

}
