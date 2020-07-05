
import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
    selector: 'fault-notify-table',
    template: `
    <nz-table #filterTable [nzData]="listOfData" [nzBordered]="true" 
    [nzShowSizeChanger]="true" [nzShowTotal]="total" [nzSize]="small"
    [nzShowQuickJumper]="true">
    <ng-template #total let-total> 共 {{ total }}条数据</ng-template>
    <thead (nzSortChange)="sort($event)" nzSingleSort>
        <tr>
            <th nzShowSort nzSortKey="fault_code" nzAlign="center"><span>故障代码</span></th>
            <th nzShowSort nzSortKey="fault_name" nzAlign="center"><span>故障名称</span></th>
            <th nzShowSort nzSortKey="fault_device_code" nzAlign="center"><span>故障设备代码</span></th>
            <th nzShowSort nzSortKey="fault_device_name" nzAlign="center"><span>故障设备名称</span></th>
            <th nzShowSort nzSortKey="fault_boat_code" nzAlign="center"><span>所属船只代码</span></th>
            <th nzShowSort nzSortKey="fault_boat_name" nzAlign="center"><span>所属船只名称</span></th>
            <th nzShowSort nzSortKey="fault_time" nzAlign="center"><span>发生故障时间</span></th>
            <th nzShowSort nzSortKey="fault_deal_method" nzAlign="center"><span>解决故障方法</span></th>
            <th nzAlign="center"><span>操作</span></th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let data of filterTable.data">
            <td nzAlign="center">{{ data.fault_code }}</td>
            <td nzAlign="center">{{ data.fault_name }}</td>
            <td nzAlign="center">{{ data.fault_device_code }}</td>
            <td nzAlign="center">{{ data.fault_device_name }}</td>
            <td nzAlign="center">{{ data.fault_boat_code }}</td>
            <td nzAlign="center">{{ data.fault_boat_name }}</td>
            <td nzAlign="center">{{ data.fault_time }}</td>
            <td nzAlign="center">{{ data.fault_deal_method }}</td>
            <td nzAlign="center"><button nz-button nzType="primary" nzSize="small" (click)="deal(data.id)">已处理</button></td>
        </tr>
    </tbody>
</nz-table>
  `,
    styles: [`
    span {
        font-weight: bold;
    }
    tr {
        line-height: 5px;
    }
    `]
})
export class FaultNotifyTableComponent implements OnInit {
    public listOfData: Array<any>;
    public sort_key;
    public sort_value;
    public fault_id: string;//*********************消息队列 */
    constructor(private httpClient: HttpClient, private apiService: ApiService) { }

    ngOnInit() {

        // this.listOfData = [
        //     {
        //         "id": "1",
        //         "fault_code": "故障代码",
        //         "fault_name": "故障名称",
        //         "fault_boat_code": "rycz_20200526",
        //         "fault_boat_name": "燃油船只20200526",
        //         "fault_device_code": "rycz_20200526_sb_05",
        //         "fault_device_name": "燃油船只20200526设备05",
        //         "fault_time": "2020-05-26 15:10:20",
        //         "fault_deal_method": "故障解决方法",
        //         "is_deal": 0,
        //     },
        //     {
        //         "id": "2",
        //         "fault_code": "故障代码",
        //         "fault_name": "故障名称",
        //         "fault_boat_code": "rycz_20200530",
        //         "fault_boat_name": "燃油船只20200530",
        //         "fault_device_code": "rycz_20200530_sb_05",
        //         "fault_device_name": "燃油船只20200530设备05",
        //         "fault_time": "2020-05-30 15:10:20",
        //         "fault_deal_method": "故障解决方法",
        //         "is_deal": 0,
        //     },
        // ];
        this.getData("1,2", null, null);
    }
    getData(id: string, sort_key: string, sort_value: string) {
        this.apiService.faultList(id, sort_key, sort_value).then(data => {
            this.listOfData = data;
        });
    }
    sort(info) {
        this.sort_key = info.key;
        this.sort_value = info.value;
        this.getData("1,2", this.sort_key, this.sort_value);
    }
    deal(id: number) {
        this.apiService.faultmessage_deal(id);
        this.getData("1,2", this.sort_key, this.sort_value);
    }

}
