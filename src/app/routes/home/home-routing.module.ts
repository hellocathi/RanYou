import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeManageComponent } from './home-manage/home-manage.component';
const routes: Routes = [
  { path: '', redirectTo: 'home-manage', pathMatch: 'full' },
  { path: 'home-manage', component: HomeManageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
