import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FaultStatisticsRoutingModule } from './fault-statistics-routing.module';
import { FaultTypeComponent } from './fault-type/fault-type.component'
import { ShipFaultComponent } from './ship-fault/ship-fault.component'
import { DeviceFaultComponent } from './device-fault/device-fault.component'
import { FaultRingChartComponent } from './fault-type/fault-ring.component'
import { ShipFaultColumnComponent } from './ship-fault/ship-column.component'
import { DeviceFaultColumnComponent } from './device-fault/device-column.component'
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    FaultStatisticsRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    FaultTypeComponent,
    ShipFaultComponent,
    DeviceFaultComponent,
    FaultRingChartComponent,
    ShipFaultColumnComponent,
    DeviceFaultColumnComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class FaultStatisticsModule { }
