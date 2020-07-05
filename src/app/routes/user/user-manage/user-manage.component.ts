
import { NzMessageService } from 'ng-zorro-antd';
import { Component, ViewChild, OnInit } from '@angular/core';
import { STColumn, STComponent, STChange, STPage } from '@delon/abc';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user',
  //selectedValue为选择数据,inputValue为输入数据
  template: `
  <div style="text-align:center; ">
    <nz-select [(ngModel)]="selectedValue" nzAllowClear nzPlaceHolder="请选择" (ngModelChange)="onChoose($event)">
        <nz-option nzValue="username" nzLabel="用户名"></nz-option>
        <nz-option nzValue="mobile" nzLabel="手机号"></nz-option>
    </nz-select>
    <nz-input-group nzSearch  [nzAddOnAfter]="suffixButton">
      <input type="text" nz-input placeholder="输入查询内容" [(ngModel)]="inputValue"/>
    </nz-input-group>
    <ng-template #suffixButton>
      <button nz-button nzType="primary" nzSearch>查询</button>
    </ng-template>
  </div>
  <div class="table">
    <button nz-button nzType="primary" (click)="Bigdelete()" nzSearch>批量删除</button>
    <button nz-button nzType="primary" (click)="addUser()" nzSearch>添加新用户</button>
    <st [data]="users" [columns]="columns" [page]="page"
        [req]="{params: params}" [res]="{process: dataProcess}"
        (change)="change($event)"></st>
  </div>
  `,
  styles: [
    `
    nz-select{
        margin-top: 12px;
        margin-right: 8px;
        margin-bottom: 20px;
        margin-left: 8px;
        width: 120px;
      }
      nz-input-group{
        margin-top: 12px;
        margin-right: 8px;
        margin-bottom: 20px;
        margin-left: 8px;
      
      }
    `
  ]
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    this.http.get('assets/data/userinfo.json')
      .pipe(map(data => data.json()))
      .subscribe(data => {
        this.users = data;
        //console.log(this.users);
      });

  }
  constructor(private message: NzMessageService, private http: Http, public router: Router) { }

  public selectedValue;
  // url = ``;
  users: any[] = [];
  checkid: any[] = [];

  params = { a: 1, b: 2 };
  // @ViewChild('st', { static: false }) private st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '序号', type: 'no', width: 60, },
    { title: '头像', type: 'img', width: 100, index: 'picture.thumbnail' },
    { title: '用户名', index: 'name' },
    // { title: '密码', index: 'password' },
    { title: '手机号', index: 'mobile' },
    { title: '简介', index: 'introduction' },
    {
      title: '删除',
      buttons: [

        {
          tooltip: '删除',
          icon: 'delete',
          type: 'del',
          pop: {
            title: '确定删除此用户所有信息?',
            okType: 'danger',
            icon: 'star',
          },
          click: (record, _modal, comp) => {
            this.message.success(`成功删除${record.name}用户`);
            comp!.removeRow(record);
          },

        },
      ],
    },
  ];
  page: STPage = {
    showSize: true,
    toTopOffset: 200,
    pageSizes: [10, 20, 30, 40, 50, 100]
  };
  change(e: STChange) {//获取勾选的id
    this.checkid = [];

    for (let i = 0; i < e.checkbox.length; i++) {
      this.checkid[i] = e.checkbox["" + i + ""].id;

    }
    console.log(this.checkid);
  }
  onChoose() {//选择关键词
    console.log(this.selectedValue);
  }

  Bigdelete() {//批量删除
    // console.log(this.checkid);

  }
  addUser() {
    this.router.navigate(['user/add-user']);
  }
}

