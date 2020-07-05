import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceDataManageComponent } from './device-data-manage/device-data-manage.component'
const routes: Routes = [
  { path: '', redirectTo: 'device-data-manage', pathMatch: 'full' },
  { path: 'device-data-manage', component: DeviceDataManageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceDataRoutingModule { }
