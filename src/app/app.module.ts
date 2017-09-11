import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { RedComponentComponent } from './red-component/red-component.component';
import {AgGridModule} from "ag-grid-angular";
import { MenuComponent } from './menu.component';
import { BondPerilComponent } from './bond-peril/bond-peril.component';
import { CELPComponent } from './celp/celp.component';
import { DR01Component } from './dr01/dr01.component';
import { ElseDetailComponent } from './else-detail/else-detail.component';
import { IlwComponent } from './ilw/ilw.component';
import { MlseComponent } from './mlse/mlse.component';
import { MlseDetailComponent } from './mlse-detail/mlse-detail.component';
import { NotionalExposureComponent } from './notional-exposure/notional-exposure.component';
import { SeasonalityComponent } from './seasonality/seasonality.component';
import { ShindoComponent } from './shindo/shindo.component';
import { ThreatReportComponent } from './threat-report/threat-report.component';
import { TvarComponent } from './tvar/tvar.component';
import { CONST_ROUTING } from "./app.routing";
import { MyDatePickerModule } from 'mydatepicker';
import {DataService} from "./classes/DataService";


@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    RedComponentComponent,
    MenuComponent,
    BondPerilComponent,
    CELPComponent,
    DR01Component,
    ElseDetailComponent,
    IlwComponent,
    MlseComponent,
    MlseDetailComponent,
    NotionalExposureComponent,
    SeasonalityComponent,
    ShindoComponent,
    ThreatReportComponent,
    TvarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING,
    AgGridModule.withComponents(RedComponentComponent),
    MyDatePickerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
