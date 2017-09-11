import { Component, OnInit } from '@angular/core';
import {DataService} from "../classes/DataService";
import {epp} from "../classes/epp";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-shindo',
  templateUrl: './shindo.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class ShindoComponent implements OnInit {

  title = 'Shindo';
  private gridOptions: GridOptions;
  private gridOptions1: GridOptions;
  columnDefs: any;
  epp: epp[];
  constructor(private _dateService: DataService) {
    this.epp = this._dateService.getEpp();

    this.gridOptions = {
      enableSorting:true,
      // pagination:true
    };
    this.gridOptions1 = {
      enableSorting:true,
      // pagination:true
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "EP(%)",
        field: "ep",
        width: 60,
        sort:'asc'
      },
      {
        headerName: "eqe(Index)",
        field: "eqe",
        width: 60
      },
      {
        headerName: "fcm(Index)",
        field: "fcm",
        width: 60
      },
      {
        headerName: "nied1(Index)",
        field: "nied1",
        width: 70
      },
      {
        headerName: "nied2(Index)",
        field: "nied2",
        width: 70
      },
      {
        headerName: "rms",
        field: "rms",
        width:50
      },

    ];

    this.gridOptions1.columnDefs = [

      {
        headerName: "Loss (Index)",
        field: "loss",
        width: 150,
        sort:'asc',
      },
      {
        headerName: "eqe (%)",
        field: "eqe",
        width: 60,
      },
      {
        headerName: "fcm (%)",
        field: "fcm",
        width: 60,
      },
      {
        headerName: "nied1 (%)",
        field: "nied1",
        width: 60,
      },
      {
        headerName: "nied2 (%)",
        field: "nied2",
        width: 60,
      },
      {
        headerName: "rms",
        field: "rms",
        width: 60,
      },

    ];

    this.gridOptions.rowData = [
      {ep:0.1,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:0.5,eqe:4.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:1,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:2,eqe:5.11,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:5,eqe:2.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:10,eqe:3.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:15,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:15,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:15,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:15,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {ep:15,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},

    ]

    this.gridOptions1.rowData = [
      {loss:3,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:3.5,eqe:4.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:4,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:4.5,eqe:5.11,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:5,eqe:2.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:5.5,eqe:3.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:7,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:7,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:7,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:7,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},
      {loss:7,eqe:5.12,fcm:5.85,nied1:5.02,nied2:5.14,rms:5.16},


    ]
  }

  ngOnInit() {
  }

}
