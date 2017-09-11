import {Component, OnInit} from '@angular/core';
import {DataService} from "../classes/DataService";
import {Portfoliocodes} from "../classes/portfoliocode";
import {segment} from "../classes/segment";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-threat-report',
  templateUrl: './threat-report.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class ThreatReportComponent implements OnInit {
  title = 'Threat Report';

  private gridOptions: GridOptions;
  columnDefs: any;
  portfoliocodes: Portfoliocodes[];
  segments: segment[];
  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
    this.segments = this._dataService.getSegments();


    this.gridOptions = {
      enableSorting:true,
      // pagination:true
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "FCM Code",
        field: "fcmcode",
        width: 140,
        sort:'asc',
      },
      {
        headerName: "Size",
        field: "size",
        width: 50,
      },
      {
        headerName: "5",
        field: "5",
        width: 40,
      },
      {
        headerName: "10",
        field: "10",
        width: 40,
      },
      {
        headerName: "20",
        field: "20",
        width: 40,
      },
      {
        headerName: "40",
        field: "40",
        width: 40,
      },
      {
        headerName: "60",
        field: "60",
        width: 40,
      },
      {
        headerName: "80",
        field: "80",
        width: 40,
      },
      {
        headerName: "100",
        field: "100",
        width: 40,
      },
      {
        headerName: "150",
        field: "150",
        width: 40,
      },
    ];

    this.gridOptions.rowData = [
      {fcmcode:'ALAMO14',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'ALAMO15A',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'ALAMO15B',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'ATL9-2015-A',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'ATL9-2015-B',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'BLUEHAULO2016',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'BLUEHAULO2016',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'ALAMO16',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'ALAMO16',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'ALAMO16',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},
      {fcmcode:'ALAMO16',size:400,5:0,10:0,20:0,40:0,60:0,80:0,100:0,150:0},

    ]
  }

  ngOnInit() {
  }

}
