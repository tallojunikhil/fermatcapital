import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {GridOptions} from "ag-grid";
import {Bonds} from "../classes/bonds";
import {perils} from "../classes/perils";
import {RedComponentComponent} from "../red-component/red-component.component";

@Component({
  selector: 'app-bond-peril',
  templateUrl: './bond-peril.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})


export class BondPerilComponent implements OnInit {
  title = 'Bond Peril';
  // private gridOptions: GridOptions;

  selectedPeril: perils = new perils('P-ABC', 'P ABC Details');
  perils: perils[];
  bonds: Bonds[];
  private gridOptions: GridOptions;
  columnDefs: any;

  constructor(private _dataService: DataService) {
    this.perils = this._dataService.getPerils();
    this.bonds = this._dataService.getBonds();

    this.gridOptions = {};
    this.gridOptions.columnDefs = [
      {
        headerName: "Peril Code",
        field: "code",
        width: 100
      },
      {
        headerName: "Weight Norm",
        field: "wn",
        width: 100
      },
      {
        headerName: "Weight EL",
        field: "wel",
        cellRendererFramework: RedComponentComponent,
        width: 100
      },

    ];
    this.gridOptions.rowData = [
      {code: '', wn: 0.19794, wel: 79.1758},
      {code: 'CBW', wn: 0.019794, wel: 21.1758},
      {code: 'CWQ', wn: 0.0019794, wel: 32.1758},
      {code: 'FLW', wn: 0.1794, wel: 42.1758},
      {code: 'LAW', wn: 0.15794, wel: 74.41},
      {code: 'MAW', wn: 0.1994, wel: 67.1758},
      {code: 'NCW', wn: 0.8794, wel: 32.1758},
      {code: 'NEQ', wn: 0.4794, wel: 77.1758},
      {code: 'MEQ', wn: 0.15294, wel: 13.1758},
      {code: 'NYW', wn: 0.1494, wel: 89.1758},
      {code: 'PWQ', wn: 0.194, wel: 55.1758},
      {code: 'SCQ', wn: 0.11594, wel: 45.1758},
      {code: 'TXW', wn: 0.19794, wel: 48.1758}

    ]
  }


  onSelect(name) {
    this.bonds = this._dataService.getBonds().filter((item) => item.pname == name);
  }

  onEvaluate() {
    alert('clicked');
    console.log('clicked....');
  }


  ngOnInit() {

  }

}
