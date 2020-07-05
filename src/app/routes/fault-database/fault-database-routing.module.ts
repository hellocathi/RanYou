import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaultControlComponent } from './fault-control/fault-database-control.component';
import { AddFaultComponent } from './fault-control/components/add-fault.component';
const routes: Routes = [
  { path: '', redirectTo: 'fault-database-control', pathMatch: 'full' },
  { path: 'fault-database-control', component: FaultControlComponent },
  { path: 'add-fault', component: AddFaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaultDatabaseRoutingModule { }
