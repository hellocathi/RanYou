import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsTabsetComponent } from './statistics-tabset/statistics-tabset.component';
import { ShipWarnComponent } from './ship-warn/ship-warn.component';
import { DeviceWarnComponent } from './device-warn/device-warn.component';
import { ShipWarnTabComponent } from './ship-warn-tab.component'
import { DeviceWarnTabComponent } from './device-warn-tab.component'
const routes: Routes = [
  {
    path: '', component: StatisticsTabsetComponent,
    children: [
      { path: '', redirectTo: 'fault-statistics', pathMatch: 'full' },
      { path: 'fault-statistics', loadChildren: () => import('./fault-statistics/fault-statistics.module').then(m => m.FaultStatisticsModule), data: { title: '故障统计' } },
      { path: 'warn-statistics', loadChildren: () => import('./warn-statistics/warn-statistics.module').then(m => m.WarnStatisticsModule), data: { title: '预警统计' } },

    ]
  },
  { path: 'ship-warn', component: ShipWarnComponent },
  { path: 'device-warn', component: DeviceWarnComponent },
  { path: 'ship-warn-tab', component: ShipWarnTabComponent },
  { path: 'device-warn-tab', component: DeviceWarnTabComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsMessageRoutingModule { }
