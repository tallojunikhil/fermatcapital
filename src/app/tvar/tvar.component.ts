import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {Portfoliocodes} from "../classes/portfoliocode";
import {lossthreshold} from "../classes/lossthreshold";
import {portfoliodate} from "../classes/portfoliodate";
import {GridOptions} from "ag-grid"
@Component({
  selector: 'app-tvar',
  templateUrl: './tvar.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class TvarComponent implements OnInit {
  title = 'TVaR';
  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');
  portfoliocodes: Portfoliocodes[];
  lossthresholds: lossthreshold[];
  portfoliodates: portfoliodate[];

  private gridOptions: GridOptions;
  columnDefs: any;

  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
    this.lossthresholds = this._dataService.getLossThresholds();
    this.portfoliodates = this._dataService.getPortfolioDates();

    this.gridOptions = {
      enableSorting:true
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "Peril Code",
        field: "portfoliocodes",
        width: 80,
        sort:'asc'
      },
      {
        headerName: "TvAR",
        field: "tvar",
        width: 60,
      },
      {
        headerName: "VaR",
        field: "var",
        width: 60,
      },
    ];

    this.gridOptions.rowData = [
      {portfoliocodes:'ALL',tvar: 0.19794, var: 79.1758},
      {portfoliocodes:'CBW',tvar: 0.019794, var: 21.1758},
      {portfoliocodes:'CWQ',tvar: 0.0019794, var: 32.1758},
      {portfoliocodes:'FLW',tvar: 0.1794, var: 42.1758},
      {portfoliocodes:'LAW',tvar: 0.15794, var: 74.41},
      {portfoliocodes:'MAW',tvar: 0.1994, var: 67.1758},
      {portfoliocodes:'NCW',tvar: 0.8794, var: 32.1758},
      {portfoliocodes:'NEQ',tvar: 0.4794, var: 77.1758},
      {portfoliocodes:'MEQ',tvar: 0.15294, var: 13.1758},
      {portfoliocodes:'NYW',tvar: 0.1494, var: 89.1758},
      {portfoliocodes:'PWQ',tvar: 0.194, var: 55.1758},
      {portfoliocodes:'SCQ',tvar: 0.11594, var: 45.1758},
      {portfoliocodes:'TXW',tvar: 0.19794, var: 48.1758}

    ]
  }

  ngOnInit() {
  }

}
