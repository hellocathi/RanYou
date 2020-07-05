import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './control/control.component';

const routes: Routes = [
  { path: '', redirectTo: 'control', pathMatch: 'full' },
  { path: 'control', component: ControlComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
