
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'fault-notify-table',
    template: `
    <div class="container">
        <h2 style="color:white;padding:15px 20px 10px 20px">当前故障</h2>
        <table>
                <tr>
                    <th width="100px"><span>故障代码</span></th>
                    <th width="120px"><span>故障名称</span></th>
                    <th width="230px"><span>故障设备代码</span></th>
                    <th width="230px"><span>故障设备名称</span></th>
                    <th width="110px"><span>所属船只代码</span></th>
                    <th width="180px"><span>所属船只名称</span></th>
                    <th width="190px"><span>发生故障时间</span></th>
                    <th width="140px"><span>解决故障方法</span></th>
                    <th width="100px"><span>操作</span></th>
                </tr>
            <tbody>
                <tr *ngFor="let data of listOfData">
                    <td>{{ data.fault_code }}</td>
                    <td>{{ data.fault_name }}</td>
                    <td>{{ data.fault_device_code }}</td>
                    <td>{{ data.fault_device_name }}</td>
                    <td>{{ data.fault_boat_code }}</td>
                    <td>{{ data.fault_boat_name }}</td>
                    <td>{{ data.fault_time }}</td>
                    <td>{{ data.fault_deal_method }}</td>
                    <td><button nz-button nzType="primary" nzSize="small" (click)="deal(data)">已处理</button></td>
                </tr>
            </tbody>
        </table>
        <div style="margin:5px 20px 0px 1380px; ">
        <button nz-button nzType="link" (click)="goDetails()" nzGhost><i nz-icon nzType="setting"></i>详情</button>
        </div>
        <div style="height:25px;"> 
        </div>
    </div>
  `,
    styles: [` 
        .container{
            background:url('assets/tmp/img/indicator.jpg');
            background-size: 100% 100%;
            margin:-25px;
        }
        table{
            text-align:center;
            margin:-5px 20px 0px 40px;
        }
        span {
            font-weight: bold;
            color:white;
        }
        th{
            border:1px solid white;
        }
        td{
            padding:5px 10px;
            border:1px solid white;
            color:white;
        }
    `]
})
export class FaultNotifyTable2Component implements OnInit {
    listOfData: Array<any>;
    constructor(public router: Router) { }
    goDetails() {
        this.router.navigate(['data-message/fault-message']);
    }
    ngOnInit() {
        this.listOfData = [
            {
                "fault_code": "故障代码",
                "fault_name": "故障名称",
                "fault_boat_code": "rycz_20200526",
                "fault_boat_name": "燃油船只20200526",
                "fault_device_code": "rycz_20200526_sb_05",
                "fault_device_name": "燃油船只20200526设备05",
                "fault_time": "2020-05-26 15:10:20",
                "fault_deal_method": "故障解决方法",
                "is_deal": 0,
            },
            {
                "fault_code": "故障代码",
                "fault_name": "故障名称",
                "fault_boat_code": "rycz_20200530",
                "fault_boat_name": "燃油船只20200530",
                "fault_device_code": "rycz_20200530_sb_05",
                "fault_device_name": "燃油船只20200530设备05",
                "fault_time": "2020-05-30 15:10:20",
                "fault_deal_method": "故障解决方法",
                "is_deal": 0,
            },
        ];
    }

}
