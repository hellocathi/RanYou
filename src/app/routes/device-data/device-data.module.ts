import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DeviceDataRoutingModule } from './device-data-routing.module';
import { DeviceDataManageComponent } from './device-data-manage/device-data-manage.component';
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DeviceDataRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    DeviceDataManageComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DeviceDataModule { }
