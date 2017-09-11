import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {Portfoliocodes} from "../classes/portfoliocode";
import {perils} from "../classes/perils";
import {portfoliodate} from "../classes/portfoliodate";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-else-detail',
  templateUrl: './else-detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class ElseDetailComponent implements OnInit {

  title = 'Else Detail';

  portfoliocodes: Portfoliocodes[];
  portfolioDates: portfoliodate[];
  perils: perils[];
  private gridOptions: GridOptions;
  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');

  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
    this.portfolioDates = this._dataService.getPortfolioDates();
    this.perils = this._dataService.getPerils();
    this.gridOptions = {
      enableSorting: true,
      // pagination:true
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "FCM Code",
        field: "fcm",
        width: 80
      },
      {
        headerName: "Size ($)",
        field: "size",
        width: 50
      },
      {
        headerName: "On Risk Factor (FLW,TXW)",
        field: "orf",
        width: 80
      },
      {
        headerName: "Peril Exposure Factor",
        field: "pef",
        width: 80
      },
      {
        headerName: "Dead Peril Factor",
        field: "dpf",
        width: 80
      },
      {
        headerName: "Structure Peril Factor",
        field: "spf",
        width: 80
      },
      {
        headerName: "First Event Exposure ($)",
        field: "fee",
        width: 80
      },
    ];

    this.gridOptions.rowData = [
      {fcm: 'ACORN215A', size: 2.2, orf: 1, pef: 0., dpf: 1, spf: 1, fee: 0.0},
      {fcm: 'ALAMO', size: 2.5, orf: 1, pef: 0., dpf: 1, spf: 1, fee: 0.0},
      {fcm: 'ALAMO15', size: 2.4, orf: 1, pef: 0., dpf: 1, spf: 1, fee: 0.0},
      {fcm: 'ALAMO15A', size: 2.6, orf: 1, pef: 0., dpf: 1, spf: 1, fee: 0.0},
      {fcm: 'ALAMO16A', size: 3.2, orf: 1, pef: 0., dpf: 1, spf: 1, fee: 0.0},
      {fcm: 'ALAMO16', size: 1.2, orf: 1, pef: 0., dpf: 1, spf: 1, fee: 0.0},

    ];
  }

  onSelect(value) {
    this.portfolioDates = this._dataService.getPortfolioDates().filter((item) => item.name == value)
  }

  ngOnInit() {
  }

}
