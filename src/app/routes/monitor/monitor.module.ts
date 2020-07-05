import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MonitorRoutingModule } from './monitor-routing.module';
import { TemperatureComponent } from './control/components/line-chart/temperature.component';
import { PressureComponent } from './control/components/line-chart/pressure.component';
import { ControlComponent } from './control/control.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CascaderComponent } from './control/components/cascader.component';
import { DeviceTable2Component } from './control/components/table/table2.component';
import { VideoComponent } from './control/components/video/video.component';
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];
@NgModule({
  imports: [
    SharedModule,
    MonitorRoutingModule,
    NzTabsModule
  ],
  exports: [

  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    TemperatureComponent,
    ControlComponent,
    CascaderComponent,
    VideoComponent,
    PressureComponent,
    DeviceTable2Component
  ],
  entryComponents: [

    COMPONENTS_NOROUNT,
  ]
})
export class MonitorModule { }
