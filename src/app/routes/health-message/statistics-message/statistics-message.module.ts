import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { StatisticsMessageRoutingModule } from './statistics-message-routing.module';
import { StatisticsTabsetComponent } from './statistics-tabset/statistics-tabset.component';
// import { FaultTypeComponent } from './fault-statistics/fault-type/fault-type.component';
// import { ShipFaultComponent } from './fault-statistics/ship-fault/ship-fault.component';
// import { DeviceFaultComponent } from './fault-statistics/device-fault/device-fault.component';
import { ShipWarnComponent } from './ship-warn/ship-warn.component';
import { DeviceWarnComponent } from './device-warn/device-warn.component';
// import { FaultRingChartComponent } from './fault-statistics/fault-type/fault-ring.component'
// import { ShipFaultColumnComponent } from './fault-statistics/ship-fault/ship-column.component'
// import { DeviceFaultColumnComponent } from './fault-statistics/device-fault/device-column.component'
import { ShipWarnColumnComponent } from './ship-warn/ship-column.component'
import { DeviceWarnColumnComponent } from './device-warn/device-column.component'
import { ShipWarnTabComponent } from './ship-warn-tab.component'
import { DeviceWarnTabComponent } from './device-warn-tab.component'
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    StatisticsMessageRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    StatisticsTabsetComponent,
    // FaultTypeComponent,
    // ShipFaultComponent,
    // DeviceFaultComponent,
    ShipWarnComponent,
    DeviceWarnComponent,
    // FaultRingChartComponent,
    // ShipFaultColumnComponent,
    // DeviceFaultColumnComponent,
    ShipWarnColumnComponent,
    DeviceWarnColumnComponent,
    ShipWarnTabComponent,
    DeviceWarnTabComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class StatisticsMessageModule { }
