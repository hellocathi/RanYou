import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeManageComponent } from './home-manage/home-manage.component';
import { HandelFaultComponent } from './home-manage/components/handel-fault.component';
import { AnalyzeFaultComponent } from './home-manage/components/analyze-fault.component';
import { TendChartComponent } from './home-manage/components/tend-chart.component';
import { ColumnStatisticsComponent } from './home-manage/components/column-statistics.component';
import { ShipFaultComponent } from './home-manage/components/ship-fault.component';
import { ShipWarnComponent } from './home-manage/components/ship-warn.component';
import { DeviceFaultComponent } from './home-manage/components/device-fault.component';
import { DeviceWarnComponent } from './home-manage/components/device-warn.component';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    HomeManageComponent,
    HandelFaultComponent,
    AnalyzeFaultComponent,
    TendChartComponent,
    ColumnStatisticsComponent,
    ShipFaultComponent,
    ShipWarnComponent,
    DeviceFaultComponent,
    DeviceWarnComponent

  ],
  exports: [
    HomeManageComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class HomeModule { }
