import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DataMessageRoutingModule } from './data-message-routing.module';
import { FaultMessageComponent } from './fault-message/fault-message.component';
import { WarnMessageComponent } from './warn-message/warn-message.component';
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DataMessageRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    FaultMessageComponent,
    WarnMessageComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DataMessageModule { }
