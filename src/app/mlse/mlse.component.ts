import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {Portfoliocodes} from "../classes/portfoliocode";
import {portfoliodate} from "../classes/portfoliodate";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-mlse',
  templateUrl: './mlse.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class MlseComponent implements OnInit {

  title = 'MLSE';
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
        headerName: "Peril Code",
        field: "pc",
        width: 70,
        sort: 'asc'
      },
      {
        headerName: "Notional Exposure",
        field: "mlse",
        width: 100
      },
    ];

    this.gridOptions.rowData = [

      {pc: 'FLW', mlse: 0.3114741},
      {pc: 'CAQ', mlse: 0.4134514},
      {pc: 'NCW', mlse: 0.4234514},
      {pc: 'NMQ', mlse: 0.1234514},
      {pc: 'PWQ', mlse: 0.3334514},
      {pc: 'SCQ', mlse: 0.2334514},
      {pc: 'CWQ', mlse: 0.1934514},
      {pc: 'CEW', mlse: 0.3834514},


    ];
  }

  onSelect(value) {
    this.portfolioDates = this._dataService.getPortfolioDates().filter((item) => item.name == value)
  }

  ngOnInit() {
  }

}
