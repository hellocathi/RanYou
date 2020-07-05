import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceControlComponent } from './device-control/device-control.component';
import { AddDeviceComponent } from './device-control/components/add-device.component';
import { ShipControlComponent } from './ship-control/ship-control.component';
import { AddShipComponent } from './ship-control/components/add-ship.component';
import { DeviceTabsetComponent } from './device-tabset/device-tabset.component'
const routes: Routes = [
  { path: '', redirectTo: 'ship-manage-control', pathMatch: 'full' },
  { path: 'tabset', component: DeviceTabsetComponent },
  { path: 'device-manage-control', component: DeviceControlComponent },
  { path: 'add-device', component: AddDeviceComponent },
  { path: 'ship-manage-control', component: ShipControlComponent },
  { path: 'add-ship', component: AddShipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceManageRoutingModule { }
