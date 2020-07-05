import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';

// passport pages
import { UserLoginComponent } from './passport/login/login.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { LogComponent } from './log/log.component';

//自定义模块
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { MonitorModule } from './monitor/monitor.module';
import { DeviceDataModule } from './device-data/device-data.module';
import { DeviceManageModule } from './device-manage/device-manage.module';
import { FaultDatabaseModule } from './fault-database/fault-database.module';
//import { MaintainModule } from './maintain/maintain.module'
//引入zorro

const COMPONENTS = [

  // passport pages
  UserLoginComponent,
  // single pages
  CallbackComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule,
    MonitorModule,
    HomeModule,
    HttpModule,
    UserModule,
    DeviceDataModule,
    DeviceManageModule,
    FaultDatabaseModule,
    //MaintainModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    LogComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule { }
