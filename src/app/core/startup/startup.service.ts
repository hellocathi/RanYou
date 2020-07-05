import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ACLService } from '@delon/acl';

import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  private viaHttp(resolve: any, reject: any) {
    zip(
      this.httpClient.get('assets/tmp/app-data.json')
    ).pipe(
      catchError(([appData]) => {
        resolve(null);
        return [appData];
      })
    ).subscribe(([appData]) => {

      // Application data
      const res: any = appData;
      // Application information: including site name, description, year
      this.settingService.setApp(res.app);
      // User information: including name, avatar, email address
      this.settingService.setUser(res.user);
      // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
      this.aclService.setFull(true);
      // Menu data, https://ng-alain.com/theme/menu
      this.menuService.add(res.menu);
      // Can be set page suffix title, https://ng-alain.com/theme/title
      this.titleService.suffix = res.app.name;

    },
      () => { },
      () => {
        resolve(null);
      });
  }

  private viaMock(resolve: any, reject: any) {
    const tokenData = this.tokenService.get();
    if (!tokenData.token) {
      this.injector.get(Router).navigateByUrl('/passport/login');
      resolve({});
      return;
    }
    // mock
    // const app: any = {
    //   name: `ng-alain`,
    //   description: `Ng-zorro admin panel front-end framework`
    // };
    const user: any = {
      name: 'Admin',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'cipchk@qq.com',
      token: '123456789'
    };
    // Application information: including site name, description, year
    //this.settingService.setApp(app);
    // User information: including name, avatar, email address

    this.settingService.setUser(this.tokenService.get());
    //this.settingService.setUser(user);

    // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
    this.aclService.setFull(true);
    // Menu data, https://ng-alain.com/theme/menu
    this.menuService.add([
      {
        text: '',
        children: [
          {
            text: '首页',
            link: '/home',
            icon: { type: 'icon', value: 'home' },
            shortcutRoot: true
          },
          {
            text: '状态监测',

            icon: { type: 'icon', value: 'monitor' },
            link: '/monitor',

          },
          {
            text: '设备数据',

            icon: { type: 'icon', value: 'profile' },
            link: '/device-data',
          },
          {
            text: '设备管理',

            icon: { type: 'icon', value: 'setting' },
            link: '/device-manage',
          },
          {
            text: '健康信息',

            icon: { type: 'icon', value: 'bell' },
            children: [
              {
                text: '数据信息',
                link: '/data-message',
              },
              {
                text: '统计信息',
                link: '/statistics-message',
              },
            ]
          },
          {
            text: '知识库管理',
            link: '/fault-database',
            icon: { type: 'icon', value: 'apartment' }
          },
          // {
          //   text: '用户管理',
          //   link: '/user',
          //   icon: { type: 'icon', value: 'user' }
          // },

          {
            text: '系统日志',
            link: '/log',
            icon: { type: 'icon', value: 'file-search' }
          },
          {
            text: '维护手册',
            link: '/maintain',
            icon: { type: 'icon', value: 'read' }
          }
        ]
      }
    ]);
    // Can be set page suffix title, https://ng-alain.com/theme/title
    //this.titleService.suffix = app.name;

    resolve({});
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      //this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.viaMock(resolve, reject);

    });
  }
}
