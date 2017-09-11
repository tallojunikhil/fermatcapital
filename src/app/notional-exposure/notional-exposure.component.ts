import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {Portfoliocodes} from "../classes/portfoliocode";
import {portfoliodate} from "../classes/portfoliodate";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-notional-exposure',
  templateUrl: './notional-exposure.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class NotionalExposureComponent implements OnInit {

  title = 'Notional Exposure';
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
        width: 80,
        sort: 'asc',
      },
      {
        headerName: "Notional Exposure",
        field: "ne",
        width: 100
      },
    ];

    this.gridOptions.rowData = [

      {pc:'FLW',ne:0.5334514},
      {pc:'CAQ',ne:0.4134514},
      {pc:'NCW',ne:0.4234514},
      {pc:'NMQ',ne:0.1234514},
      {pc:'PWQ',ne:0.3334514},
      {pc:'SCQ',ne:0.2334514},
      {pc:'CWQ',ne:0.1934514},
      {pc:'CEW',ne:0.3834514},


    ];
  }

  onSelect(value) {
    this.portfolioDates = this._dataService.getPortfolioDates().filter((item) => item.name == value)
  }

  ngOnInit() {
  }

}
