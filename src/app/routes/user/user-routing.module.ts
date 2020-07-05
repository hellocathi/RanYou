import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user-manage/components/add-user.component';
import { UserComponent } from './user-manage/user-manage.component';
const routes: Routes = [
  { path: '', redirectTo: 'user-manage', pathMatch: 'full' },
  { path: 'user-manage', component: UserComponent },
  { path: 'add-user', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
