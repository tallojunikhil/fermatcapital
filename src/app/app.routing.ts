/**
 * Created by penug on 5/1/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import { BondPerilComponent } from "./bond-peril/bond-peril.component"
import { CELPComponent } from "./celp/celp.component"
import { DR01Component } from "./dr01/dr01.component"
import { ElseDetailComponent } from "./else-detail/else-detail.component"
import { IlwComponent } from "./ilw/ilw.component"
import { MlseComponent } from "./mlse/mlse.component"
import { MlseDetailComponent} from "./mlse-detail/mlse-detail.component"
import { MyGridApplicationComponent } from "./my-grid-application/my-grid-application.component"
import { NotionalExposureComponent } from "./notional-exposure/notional-exposure.component"
import { SeasonalityComponent } from "./seasonality/seasonality.component"
import { ShindoComponent } from "./shindo/shindo.component"
import { ThreatReportComponent } from "./threat-report/threat-report.component"
import { TvarComponent } from "./tvar/tvar.component"

const MAINMENU_ROUTES: Routes = [
  {path: '', redirectTo:'/bondperil', pathMatch:'full'},
  {path:'bondperil', component: BondPerilComponent},
  {path:'celp', component: CELPComponent},
  {path:'dr01',component:DR01Component},
  {path:'elsedetail',component:ElseDetailComponent},
  {path:'ilw',component:IlwComponent},
  {path:'mlse',component:MlseComponent},
  {path:'mlsedetail',component: MlseDetailComponent},
  {path:'notionalexposure',component: NotionalExposureComponent},
  {path:'seasonality',component: SeasonalityComponent},
  {path:'shindo',component:ShindoComponent},
  {path:'threatreport',component:ThreatReportComponent},
  {path:'tvar',component:TvarComponent}

  ];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
