import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarnMessageComponent } from './warn-message/warn-message.component'
import { FaultMessageComponent } from './fault-message/fault-message.component'
const routes: Routes = [
  { path: '', redirectTo: 'fault-message', pathMatch: 'full' },
  { path: 'fault-message', component: FaultMessageComponent },
  { path: 'warn-message', component: WarnMessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataMessageRoutingModule { }
