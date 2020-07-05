import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaultTypeComponent } from './fault-type/fault-type.component'
import { ShipFaultComponent } from './ship-fault/ship-fault.component'
import { DeviceFaultComponent } from './device-fault/device-fault.component'

const routes: Routes = [
  { path: '', redirectTo: 'fault-type', pathMatch: 'full' },
  { path: 'fault-type', component: FaultTypeComponent },
  { path: 'ship-fault', component: ShipFaultComponent },
  { path: 'device-fault', component: DeviceFaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaultStatisticsRoutingModule { }
