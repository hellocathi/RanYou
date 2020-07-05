import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages

import { LogComponent } from './log/log.component';

// passport pages
import { UserLoginComponent } from './passport/login/login.component';
// single pages
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'log', component: LogComponent, data: { title: '系统日志' } },
      { path: 'data-message', loadChildren: () => import('./health-message/data-message/data-message.module').then(m => m.DataMessageModule), data: { title: '数据信息' } },
      { path: 'statistics-message', loadChildren: () => import('./health-message/statistics-message/statistics-message.module').then(m => m.StatisticsMessageModule), data: { title: '统计信息' } },
      { path: 'fault-database', loadChildren: () => import('./fault-database/fault-database.module').then(m => m.FaultDatabaseModule), data: { title: '知识库管理' } },
      { path: 'device-manage', loadChildren: () => import('./device-manage/device-manage.module').then(m => m.DeviceManageModule), data: { title: '设备管理' } },
      { path: 'device-data', loadChildren: () => import('./device-data/device-data.module').then(m => m.DeviceDataModule), data: { title: '设备数据' } },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), data: { title: '用户管理' } },
      { path: 'monitor', loadChildren: () => import('./monitor/monitor.module').then(m => m.MonitorModule), data: { title: '状态监测' } },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: { title: '首页' } },
      { path: 'maintain', loadChildren: () => import('./maintain/maintain.module').then(m => m.MaintainModule), data: { title: '维护手册' } },
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule), data: { title: '' } },

    ]
  },
  // 全屏布局
  {
    path: 'fullscreen',
    component: LayoutFullScreenComponent,
    children: [
    ]
  },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { title: '登录' } }
    ]
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top',
    }
    )],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
