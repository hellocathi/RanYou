import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Menu, MenuService, SettingsService } from '@delon/theme';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(public settings: SettingsService, private modalService: NzModalService, ) { }
  write_mail() {
    const modal = this.modalService.create({
      nzTitle: '写信',
      nzContent: null,
      nzWidth: 500,
      nzFooter: null,
    });
  }
}
