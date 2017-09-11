import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {IMyDateModel, IMyOptions} from "mydatepicker";
import {Bonds} from "../classes/bonds";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-seasonality',
  templateUrl: './seasonality.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class SeasonalityComponent implements OnInit {
  title = 'Seasonality';
  bonds: Bonds[];
  private gridOptions: GridOptions;

  constructor(private _dataService: DataService) {
    this.bonds = this._dataService.getBonds();

    this.gridOptions = {
      enableSorting: true,
      // pagination:true
    };

    this.gridOptions.columnDefs = [
      {
        headerName: "Peril Code",
        field: "pc",
        width: 60,
        sort: 'asc',
      },
      {
        headerName: "Peril Weight",
        field: "pw",
        width: 80,
      },
      {
        headerName: "EL Init",
        field: "eli",
        width: 70,
      },
      {
        headerName: "Risk Reasons",
        field: "rr",
        width: 80,
      },
      {
        headerName: "EL (bps*yr)",
        field: "el",
        width: 80,
      },
      {
        headerName: "Seasonality Code",
        field: "sc",
        width: 80,
      },

    ];
    this.gridOptions.rowData = [
      {pc:'AUQ', pw: '0.211', eli: '38.191', rr: '-0.00358', el: '11.788', sc: '-'},
      {pc:'AUW', pw: '0.211', eli: '38.191', rr: '-0.00358', el: '11.788', sc: '-'},
      {pc:'CAW', pw: '0.211', eli: '38.191', rr: '-0.00358', el: '11.788', sc: '-'},
      {pc:'NEQ', pw: '0.211', eli: '38.191', rr: '-0.00358', el: '11.788', sc: '-'},
      {pc:'MEQ', pw: '0.211', eli: '38.191', rr: '-0.00358', el: '11.788', sc: '-'},
      {pc:'MAQ', pw: '0.211', eli: '38.191', rr: '-0.00358', el: '11.788', sc: '-'},
      {pc:'SCQ', pw: '0.211', eli: '38.191', rr: '-0.00358', el: '11.788', sc: '-'},

    ];
  }


  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'mm/dd/yyyy',
    inline: false

  }


  onDateChanged(event: IMyDateModel) {

  }

  ngOnInit() {
  }

}
