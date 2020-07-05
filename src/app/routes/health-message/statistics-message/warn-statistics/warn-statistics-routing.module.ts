import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipWarnComponent } from './ship-warn/ship-warn.component'
import { DeviceWarnComponent } from './device-warn/device-warn.component'

const routes: Routes = [
  { path: '', redirectTo: 'ship-warn', pathMatch: 'full' },
  { path: 'ship-warn', component: ShipWarnComponent },
  { path: 'device-warn', component: DeviceWarnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarnStatisticsRoutingModule { }
