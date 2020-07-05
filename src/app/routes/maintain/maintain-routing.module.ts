import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintainComponent } from './maintain/maintain.component'
const routes: Routes = [
  { path: '', redirectTo: 'maintain', pathMatch: 'full' },
  { path: 'maintain', component: MaintainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintainRoutingModule { }
