
import { Component, ViewChild, OnInit } from '@angular/core';
import { STColumn, STComponent, STChange } from '@delon/abc';
@Component({
    selector: 'warn-notify-table',
    template: `
    <div class="container">
        <h2 class="title">当前预警</h2>
        <nz-table #filterTable [nzData]="listOfData" [nzBordered]="true" [nzShowSizeChanger]="true" [nzShowTotal]="total"
    >
    <ng-template #total let-total> <div style="color:white">共 {{ total }}条数据</div></ng-template>
    <thead (nzSortChange)="sort($event)" nzSingleSort>
        <tr>
            <th nzShowSort nzSortKey="warning_code" nzAlign="center"><span>预警代码</span></th>
            <th nzShowSort nzSortKey="warning_name" nzAlign="center"><span>预警名称</span></th>
            <th nzShowSort nzSortKey="warning_device_code" nzAlign="center"><span>预警设备代码</span></th>
            <th nzShowSort nzSortKey="warning_device_name" nzAlign="center"><span>预警设备名称</span></th>
            <th nzShowSort nzSortKey="warning_boat_code" nzAlign="center"><span>所属船只代码</span></th>
            <th nzShowSort nzSortKey="warning_boat_name" nzAlign="center"><span>所属船只名称</span></th>
            <th nzShowSort nzSortKey="warning_time" nzAlign="center"><span>发生预警时间</span></th>
            <th nzShowSort nzSortKey="warning_deal_method" nzAlign="center"><span>解决预警方法</span></th>
            <th nzAlign="center"><span>操作</span></th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let data of filterTable.data">
            <td nzAlign="center">{{ data.warning_code }}</td>
            <td nzAlign="center">{{ data.warning_name }}</td>
            <td nzAlign="center">{{ data.warning_device_code }}</td>
            <td nzAlign="center">{{ data.warning_device_name }}</td>
            <td nzAlign="center">{{ data.warning_boat_code }}</td>
            <td nzAlign="center">{{ data.warning_boat_name }}</td>
            <td nzAlign="center">{{ data.warning_time }}</td>
            <td nzAlign="center">{{ data.warning_deal_method }}</td>
            <td nzAlign="center"><button nz-button nzType="primary" nzSize="small" (click)="deal(data)">已处理</button></td>
        </tr>
    </tbody>
</nz-table>
        <div style="margin:0px 20px 0px 1480px; ">
        <button nz-button nzType="Default" (click)="goDetails()" nzGhost><i nz-icon nzType="setting"></i>详情</button>
        </div>
        <div style="height:25px;"> 
        </div>
    </div>
  `,
    styles: [` 
        .container{
            background:url('assets/tmp/img/indicator2.jpg');
            background-size: 100% 100%;
            margin:-25px;
        }
        nz-table{
            margin:-5px 20px 0px 35px;
        }
        span {
            font-weight: bold;
            color:black;
        }
        td{
            
            color:white;
        }
        .title{
            font-weight: bold;
            color:white;
            padding:10px 20px 10px 20px;
            text-align:center
        }
    `]
})
export class WarnNotifyTable2Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    listOfData: Array<any> = [


        {
            "warning_code": "预警代码",
            "warning_name": "预警名称",
            "warning_boat_code": "rycz_20200526",
            "warning_boat_name": "燃油船只20200526",
            "warning_device_code": "rycz_20200526_sb_05",
            "warning_device_name": "燃油船只20200526设备05",
            "warning_time": "2020-05-26 15:10:20",
            "warning_deal_method": "预警解决方法",
            "is_deal": 0,
        },
        {
            "warning_code": "预警代码",
            "warning_name": "预警名称",
            "warning_boat_code": "rycz_20200530",
            "warning_boat_name": "燃油船只20200530",
            "warning_device_code": "rycz_20200530_sb_05",
            "warning_device_name": "燃油船只20200530设备05",
            "warning_time": "2020-05-30 15:10:20",
            "warning_deal_method": "预警解决方法",
            "is_deal": 0,
        },


    ];
}
