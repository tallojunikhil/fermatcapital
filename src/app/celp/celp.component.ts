import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {Portfoliocodes} from "../classes/portfoliocode";
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import {portfoliodate} from "../classes/portfoliodate";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-celp',
  templateUrl: './celp.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class CELPComponent implements OnInit {

  title = 'CELP';
  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');

  portfoliocodes: Portfoliocodes[];
  portfolioDates: portfoliodate[];
  private gridOptions: GridOptions;
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

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
        field: "celp",
        width: 120,
      },
    ];

    this.gridOptions.rowData = [

      {pc:'FLW',celp:0.3114741},
      {pc:'CAQ',celp:0.4134514},
      {pc:'NCW',celp:0.4234514},
      {pc:'NMQ',celp:0.1234514},
      {pc:'PWQ',celp:0.3334514},
      {pc:'SCQ',celp:0.2334514},
      {pc:'CWQ',celp:0.1934514},
      {pc:'CEW',celp:0.3834514},


    ];
  }


  onSelect(value) {
    this.portfolioDates = this._dataService.getPortfolioDates().filter((item) => item.name == value)
  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
  }

  ngOnInit() {
  }

}
