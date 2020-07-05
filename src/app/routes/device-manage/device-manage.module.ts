import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DeviceManageRoutingModule } from './device-manage-routing.module';
import { DeviceControlComponent } from './device-control/device-control.component';
import { EditDeviceComponent } from './device-control/components/edit-device.component';
import { AddDeviceComponent } from './device-control/components/add-device.component';
import { EditShipComponent } from './ship-control/components/edit-ship.component';
import { AddShipComponent } from './ship-control/components/add-ship.component';
import { ShipControlComponent } from './ship-control/ship-control.component';
import { DeviceTabsetComponent } from './device-tabset/device-tabset.component';
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DeviceManageRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    DeviceControlComponent,
    EditDeviceComponent,
    AddDeviceComponent,
    ShipControlComponent,
    EditShipComponent,
    AddShipComponent,
    DeviceTabsetComponent
  ],
  entryComponents: [
    COMPONENTS_NOROUNT,
    EditDeviceComponent,
    EditShipComponent
  ]
})
export class DeviceManageModule { }
