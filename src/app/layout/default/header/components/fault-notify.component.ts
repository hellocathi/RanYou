import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FaultNotifyTableComponent } from './fault-notify-table.component';
import { FaultNotifyTable2Component } from './fault-notify-table2.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'
/**
 * 菜单通知
 */
@Component({
  selector: 'fault-notify',
  template: `
  <div class="alain-default__nav-item">
    <button class="a" nz-button nzType="link" nzGhost (click)="showModal()">
      <i nz-icon nzType="alert"  style="font-size: 24px; color:red;"></i>
      <nz-badge [(nzCount)]="fault_count" [nzOffset]="[-10,-28]" [nzStyle]="{boxShadow: '0 0 0 1px red inset' }"></nz-badge>
    </button>
  </div>
  `,
  styles: [
    `
    .a{
      margin-left:-12px;
      margin-right:-15px;
    }
    `
  ],


})
export class FaultNotifyComponent implements OnInit {

  //********************************************************** */
  //配合消息队列

  public fault_count;
  getData() {
    this.apiService.not_deal_fault().then(data => {
      this.fault_count = data;
    });
  }
  ngOnInit() {
    this.getData();
  }
  constructor(private modalService: NzModalService, public router: Router,
    private apiService: ApiService,
  ) { }



  // showModal() {
  //   const modal = this.modalService.create({
  //     //nzTitle: '当前故障',
  //     nzContent: FaultNotifyTable2Component,
  //     nzWidth: 1500,
  //     nzOkText: null,
  //     nzCancelText: null,
  //     nzFooter: null,
  //     //nzOnOk: () => this.router.navigate(['data-message/fault-message']),
  //   });
  // }

  showModal() {
    const modal = this.modalService.create({
      nzTitle: '当前故障',
      nzContent: FaultNotifyTableComponent,
      nzWidth: 1540,
      nzOkText: '详情',
      nzCancelText: null,
      nzOnOk: () => this.router.navigate(['data-message/fault-message']),
    });
  }
} 
