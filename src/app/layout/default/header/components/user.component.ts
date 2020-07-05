import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PasswordEditComponent } from './password-edit.component ';
import { IntroductionEditComponent } from './introduction-edit.component';
import { AvatarEditComponent } from './avatar-edit.component';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'header-user',
  template: `
    <div 
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <nz-avatar [nzSrc]="settings.user.avatar" nzSize="large" nzIcon="user" class="mr-sm"></nz-avatar>
      {{ settings.user.name }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu" >
      <div nz-menu class="width-sm">
        <div nz-menu-item (click)="avatarEdit()">
          <i nz-icon nzType="user" class="mr-sm"></i>
          修改头像
        </div>
        <div nz-menu-item (click)="passwordEdit()">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          修改密码
        </div>
        <div nz-menu-item (click)="userInfo()">
          <i nz-icon nzType="edit" class="mr-sm"></i>
          修改简介
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          退出登录
        </div>
      </div>
    </nz-dropdown-menu>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class HeaderUserComponent {
  constructor(
    private message: NzMessageService,
    private modalService: NzModalService,
    private router: Router,
    public settings: SettingsService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) { }

  logout() {
    this.modalService.confirm({
      nzTitle: '您确定退出系统吗？',
      nzOnOk: () => {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url!);
      }
    });

  }

  avatarEdit() {
    const modal = this.modalService.create({
      nzTitle: '修改头像',
      nzContent: AvatarEditComponent,
      nzWidth: 400,
      nzFooter: [
        {
          type: "primary",
          label: "确定",
          onClick: () => {
            if (modal.getContentComponent().fileList.length == 1) {
              const modal2 = this.modalService.success({
                nzTitle: '修改成功！',
              });
              setTimeout(() => modal2.destroy(), 2500);
            }
            modal.destroy();

          },
        }

      ],
    });

  }

  // /**
  //      * 头像更换
  //      */
  // avatarReplacement() {
  //   this.ngbModalService.open(AvatarCropperComponent, { size: 'lg', backdrop: 'static', keyboard: false }).result.then((result) => {
  //     this.apiService.me().then(data => {
  //       if (data.status == 'ok') {
  //         // this.mainData.userData = data['data'];
  //         // if (data['data']['avator'] == null) {
  //         //   this.mainData.userData.avator = this.defatltImage;
  //         // }
  //       } else {
  //         console.error('获取用户信息失败', data.message);
  //         this.router.navigate(['/login']);
  //       }
  //     }).catch(err => {
  //       console.error('获取用户异常', err);
  //       this.router.navigate(['/login']);
  //     });
  //   }, (reason) => {

  //   });
  // }


  passwordEdit() {

    const modal = this.modalService.create({
      nzTitle: '修改密码',
      nzContent: PasswordEditComponent,
      nzWidth: 500,
      nzFooter: [
        {
          type: "primary",
          label: "确定",
          disabled: ((contentComponentInstance) => !contentComponentInstance.validateForm.valid),
          onClick: () => {
            let oldpassword = modal.getContentComponent().validateForm.controls['oldpassword'].value;
            let password = modal.getContentComponent().validateForm.controls['password'].value;
            console.log(oldpassword, password);
            //验证旧密码是否正确
            // oldpassword == this.tokenService.get().password -----if里语句
            if (true) {
              //后端接口,提交新密码

              const modal2 = this.modalService.success({
                nzTitle: '修改成功！',
              });

              setTimeout(() => modal2.destroy(), 2500);
              modal.destroy();
            } else {
              this.message.error('旧密码错误', { nzDuration: 2000 });
            }
          },
        }

      ],
    });

  }

  userInfo() {
    const modal = this.modalService.create({
      nzTitle: '修改简介',
      nzContent: IntroductionEditComponent,
      nzWidth: 500,
      nzFooter: [
        {
          type: "primary",
          label: "确定",
          onClick: () => {
            let introduction = modal.getContentComponent().validateForm.controls['introduction'].value;
            console.log(introduction);
            //提交后端
            const modal2 = this.modalService.success({
              nzTitle: '修改成功！',
            });
            setTimeout(() => modal2.destroy(), 2500);
            modal.destroy();

          },
        }

      ],
    });

  }

}