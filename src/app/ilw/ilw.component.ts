import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {states} from "../classes/states";
import {ilw} from "../classes/ilw";
import {perils} from "../classes/perils";
import {region} from "../classes/region";
import {lob} from "../classes/lob";
import {rms} from "../classes/rms";
import {ege} from "../classes/ege";
import {aggocc} from "../classes/aggocc";
import {epp} from "../classes/epp";
import {lpp} from "../classes/lpp";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-ilw',
  templateUrl: './ilw.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})



export class IlwComponent implements OnInit {
  title = 'ILW';

  perils: perils[];
  region : region[];
  lob : lob[];
  rms : rms[];
  ege : ege[];
  aggocc : aggocc[];
  epp: epp[];
  lpp: lpp[];

  private gridOptions: GridOptions;
  private gridOptions1: GridOptions;

  constructor(private _dateService: DataService) {
    this.perils = this._dateService.getPerils();
    this.region = this._dateService.getRegions();
    this.lob = this._dateService.getLob();
    this.rms = this._dateService.getRms();
    this.ege = this._dateService.getEge();
    this.aggocc = this._dateService.getAggocc();
    this.epp = this._dateService.getEpp();
    this.lpp = this._dateService.getLpp();

    this.gridOptions = {
      enableSorting: true,
      // pagination:true
    };

    this.gridOptions1 = {
      enableSorting: true,
      // pagination:true
    };
    this.gridOptions.columnDefs = [

      {
        headerName: "EP(%)",
        field: "ep",
        width: 60
      },
      {
        headerName: "AIR($B)",
        field: "air",
        width: 60
      },
      {
        headerName: "EQE($B)",
        field: "eqe",
        width: 60
      },
      {
        headerName: "RMS($B)",
        field: "rms",
        width: 60
      }

    ];


    this.gridOptions1.columnDefs = [

      {
        headerName: "LOSS ($B)",
        field:"loss",
        width:60
      },
      {
        headerName: "AIR (%)",
        field:"air",
        width:60
      },
      {
        headerName: "EQE (%)",
        field:"eqe",
        width:60
      },
      {
        headerName: "RMS (%)",
        field:"rms",
        width: 60
      },

    ];

    this.gridOptions.rowData = [
      {ep:0.1,air:285.88,eqe:201.76,rms:268.52},
      {ep:0.5,air:166.88,eqe:201.76,rms:28.52},
      {ep:1,air:85.88,eqe:201.76,rms:28.52},
      {ep:2,air:76.88,eqe:201.76,rms:28.52},
      {ep:5,air:69.88,eqe:201.76,rms:28.52},
      {ep:10,air:32.88,eqe:201.76,rms:28.52},
      {ep:15,air:9.88,eqe:201.76,rms:28.52},



    ];


    this.gridOptions1.rowData = [
      {loss:1,air:85.88,eqe:201.76,rms:31.39},
      {loss:5,air:85.88,eqe:201.76,rms:28.52},
      {loss:10,air:85.88,eqe:201.76,rms:28.52},
      {loss:25,air:85.88,eqe:201.76,rms:28.52},
      {loss:100,air:85.88,eqe:201.76,rms:28.52},

    ];
  }

  ngOnInit() {
  }
}
