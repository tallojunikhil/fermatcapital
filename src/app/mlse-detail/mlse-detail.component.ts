import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {Portfoliocodes} from "../classes/portfoliocode";
import {portfoliodate} from "../classes/portfoliodate";
import {perils} from "../classes/perils";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-mlse-detail',
  templateUrl: './mlse-detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class MlseDetailComponent implements OnInit {
  title = 'MLSE Detail';

  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');

  portfoliocodes: Portfoliocodes[];
  portfolioDates: portfoliodate[];
  perils: perils[];
  private gridOptions: GridOptions;

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
        width: 70
      },
      {
        headerName: "Size ($)",
        field: "size",
        width: 50,
      },
      {
        headerName: "OnRiskFactor(FLW,TXW)",
        field: "orf",
        width: 130
      },
      {
        headerName: "PerilExposureFactor",
        field: "pef",
        width: 80
      },
      {
        headerName: "DeadPerilFactor",
        field: "dpf",
        width: 80
      },
      {
        headerName: "StructurePerilFactor",
        field: "spf",
        width: 80
      },
      {
        headerName: "FirstEventExposure($)",
        field: "fee",
        width: 100
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
