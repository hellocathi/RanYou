import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FaultDatabaseRoutingModule } from './fault-database-routing.module';
import { FaultControlComponent } from './fault-control/fault-database-control.component';
import { AddFaultComponent } from './fault-control/components/add-fault.component';
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    FaultDatabaseRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    FaultControlComponent,
    AddFaultComponent
  ],
  entryComponents: [COMPONENTS_NOROUNT]
})
export class FaultDatabaseModule { }
