import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { LayoutDefaultComponent } from './default/default.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component';
import { HeaderStorageComponent } from './default/header/components/storage.component';
import { HeaderTimeComponent } from './default/header/components/time.component';
import { HeaderUserComponent } from './default/header/components/user.component';
import { FaultNotifyComponent } from './default/header/components/fault-notify.component';
import { WarnNotifyComponent } from './default/header/components/warn-notify.component';
import { FaultNotifyTableComponent } from './default/header/components/fault-notify-table.component';
import { WarnNotifyTableComponent } from './default/header/components/warn-notify-table.component';
import { PasswordEditComponent } from './default/header/components/password-edit.component ';
import { AvatarEditComponent } from './default/header/components/avatar-edit.component';
import { IntroductionEditComponent } from './default/header/components/introduction-edit.component';
import { FaultNotifyTable2Component } from './default/header/components/fault-notify-table2.component';
import { WarnNotifyTable2Component } from './default/header/components/warn-notify-table2.component';

const COMPONENTS = [
  LayoutDefaultComponent,
  LayoutFullScreenComponent,
  HeaderComponent,
  SidebarComponent,

];

const HEADERCOMPONENTS = [
  HeaderFullScreenComponent,
  HeaderStorageComponent,
  HeaderUserComponent,
  WarnNotifyComponent,
  FaultNotifyComponent,
  HeaderTimeComponent,
  FaultNotifyTableComponent,
  WarnNotifyTableComponent,
  PasswordEditComponent,
  IntroductionEditComponent,
  AvatarEditComponent,
  FaultNotifyTable2Component,
  WarnNotifyTable2Component
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [
  LayoutPassportComponent
];

@NgModule({
  imports: [SharedModule],
  entryComponents: [

    FaultNotifyTableComponent,
    WarnNotifyTableComponent,
    PasswordEditComponent,
    IntroductionEditComponent,
    AvatarEditComponent,
    FaultNotifyTable2Component,
    WarnNotifyTable2Component
  ],
  declarations: [
    ...COMPONENTS,
    ...HEADERCOMPONENTS,
    ...PASSPORT
  ],
  exports: [
    ...COMPONENTS,
    ...PASSPORT
  ]
})
export class LayoutModule { }
