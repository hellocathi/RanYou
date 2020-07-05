import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { WarnStatisticsRoutingModule } from './warn-statistics-routing.module';
import { ShipWarnComponent } from './ship-warn/ship-warn.component'
import { DeviceWarnComponent } from './device-warn/device-warn.component'
import { ShipWarnColumnComponent } from './ship-warn/ship-column.component'
import { DeviceWarnColumnComponent } from './device-warn/device-column.component'
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    WarnStatisticsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    ShipWarnComponent,
    DeviceWarnComponent,
    ShipWarnColumnComponent,
    DeviceWarnColumnComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class WarnStatisticsModule { }
