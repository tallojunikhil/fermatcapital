import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {portfolios} from "../classes/portfolios";
import {portfoliodate} from "../classes/portfoliodate";
import {Portfoliocodes} from "../classes/portfoliocode";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-dr01',
  templateUrl: './dr01.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class DR01Component implements OnInit {

  title = 'DR01';
  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');

  portfoliocodes: Portfoliocodes[];
  portfolioDates: portfoliodate[];
  private gridOptions: GridOptions;

  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
    this.portfolioDates = this._dataService.getPortfolioDates();
    this.gridOptions = {
      enableSorting: true,
      // pagination:true
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "FCM Code",
        field: "fcm",
        width: 80,
        sort: 'asc',
      },
      {
        headerName: "100Yr ($mm)",
        field: "hyr",
        width: 80
      },
      {
        headerName: "1000Yr ($mm)",
        field: "tyr",
        width: 80
      },
      {
        headerName: "100Yr (%NAV)",
        field: "hyrp",
        width: 80
      },
      {
        headerName: "1000Yr (%NAV)",
        field: "tyrp",
        width: 80
      },

    ];

    this.gridOptions.rowData = [

      {fcm: 'ACCORN2015A', hyr: 0.155, tyr: 0.0051, hyrp: 0.39154, tyrp: 0.571402},
      {fcm: 'ALAMO', hyr: 0.155, tyr: 0.0051, hyrp: 0.39154, tyrp: 0.571402},
      {fcm: 'ALAMO14', hyr: 0.155, tyr: 0.0051, hyrp: 0.39154, tyrp: 0.571402},
      {fcm: 'ALAMO15-A', hyr: 0.155, tyr: 0.0051, hyrp: 0.39154, tyrp: 0.571402},
      {fcm: 'ALAMO16', hyr: 0.155, tyr: 0.0051, hyrp: 0.39154, tyrp: 0.571402},
      {fcm: 'ATTL', hyr: 0.155, tyr: 0.0051, hyrp: 0.39154, tyrp: 0.571402},
      {fcm: 'AZURE', hyr: 0.155, tyr: 0.0051, hyrp: 0.39154, tyrp: 0.571402},

    ];
  }

  onSelect(value) {
    this.portfolioDates = this._dataService.getPortfolioDates().filter((item) => item.name == value)
  }


  ngOnInit() {
  }

}
