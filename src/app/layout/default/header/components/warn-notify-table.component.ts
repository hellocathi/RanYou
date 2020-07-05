
import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
    selector: 'warn-notify-table',
    template: `
    <nz-table #filterTable [nzData]="listOfData" [nzBordered]="true"
     [nzShowSizeChanger]="true" [nzShowTotal]="total" [nzSize]="small"
    [nzShowQuickJumper]="true">
    <ng-template #total let-total> 共 {{ total }}条数据</ng-template>
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
            <td nzAlign="center"><button nz-button nzType="primary" nzSize="small" (click)="deal(data.id)">已处理</button></td>
        </tr>
    </tbody>
</nz-table>
  `,
    styles: [`
    tr {
        line-height: 5px;
    }
    span {
        font-weight: bold;
    }

    `]
})
export class WarnNotifyTableComponent implements OnInit {

    public listOfData: Array<any>;
    public sort_key;
    public sort_value;
    public warn_id: number[];//*********************消息队列 */
    constructor(private httpClient: HttpClient, private apiService: ApiService) { }

    ngOnInit() {

        this.listOfData = [
            {
                "id": "1",
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
                "id": "2",
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
        //this.warningList(this.dataService.warn_id,null,null);
        this.getData("1, 2", null, null);
    }

    getData(id: string, sort_key: string, sort_value: string) {
        this.apiService.warningList(id, sort_key, sort_value).then(data => {
            this.listOfData = data;
        });
    }

    sort(info) {
        this.sort_key = info.key;
        this.sort_value = info.value;
        this.getData("1, 2", this.sort_key, this.sort_value);
    }
    deal(id) {
        this.apiService.warnmessage_deal(id);
        this.getData("1, 2", this.sort_key, this.sort_value);
    }

}