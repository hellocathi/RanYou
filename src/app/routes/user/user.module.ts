import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user-manage/user-manage.component';
import { AddUserComponent } from './user-manage/components/add-user.component';
import { FormsModule } from '@angular/forms'
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    UserComponent,
    AddUserComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class UserModule { }
