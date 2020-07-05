import { ApiService } from 'src/app/services/api.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
    selector: 'device-fault',
    template: `
    <div style="color:white;font-size:20px;margin:0px 0 0 30px;">设备故障排名</div>
    <select (change)="onChange($event.target.value)">
        <option value="1">近七天</option>
        <option value="2">近一月</option>
        <option value="3">近一季</option>
        <option value="4">近一年</option>
        <option value="5">全部</option>
    </select>
    <div class="a" id="device-fault"></div>
    <div style="float:right;margin:0px 20px 0 0"  >
        <button nz-button nzType="link" (click)="goDetails()" nzGhost><i nz-icon nzType="setting"></i>详情</button>
    </div>
  `,
    styles: [
        `
        option{
            background-color:white;
            color:black;
            }
        select{
            margin: 10px 0px 0px 31%;
            width: 160px;
            height:30px;
            color:white;
            background:none;
            background:url("assets/tmp/img/select.jpg");
            background-size: 100% 100%;
            border-style: none;
            text-indent: 82px;
            position:absolute;
            z-index:10;
        }
        .a{
            margin: 30px 0px 0px 0px;
          }
    `
    ]
})
export class DeviceFaultComponent implements OnInit {

    public data: Array<any>;
    constructor(public router: Router, private httpClient: HttpClient, private apiService: ApiService) { }

    ngOnInit() {
        this.getData(1);
    }
    getData(date: number) {
        this.apiService.DevicesFaultRank(date).then(data => {
            this.getChart(data);
        });
    }
    getChart(data) {

        let maxdata = Math.floor(data[4].fault_device_count / 0.95);
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: 'map',
            callback(row) { // 加工数据后返回新的一行，默认返回行数据本身
                row.newCol = maxdata - row.fault_device_count;
                return row;
            }
        });
        dv.transform({
            type: 'fold',
            fields: ['fault_device_count', 'newCol'], // 展开字段集
            key: 'people', // key字段
            value: 'value', // value字段
        });
        const chart = new G2.Chart({
            container: 'device-fault',
            forceFit: true,
            height: 190,
            padding: [20, 25, 0, 110]
        });
        chart.source(dv);
        chart.axis('fault_device_name', {
            line: null,
            tickLine: null,
            label: {
                offset: 12,
                textStyle: {
                    fill: 'white'
                }
            }
        });
        chart.axis('value', {
            label: null,
            line: null,
            grid: null,
            tickLine: null,
        });
        chart.legend(false);
        chart.tooltip(false);
        chart.coord().transpose();
        const interval = chart.intervalStack().position('fault_device_name*value')
            .color('people', ['l(360) 0:rgb(101,82,174) 1:rgb(195, 207, 239)', 'rgb(24, 74, 123)'])
            .size(10)
            .opacity(1)
            .label('value', {
                formatter: (text, item, index) => {
                    if (item.point.people == "newCol") {
                        return maxdata - item.point.value;
                    }
                },
                textStyle: {
                    fill: 'white',
                    textAlign: 'end',
                },
                offsetX: -10,
                offsetY: -5,
            });
        chart.render();
    }
    goDetails() {
        this.router.navigate(['statistics-message/fault-statistics/device-fault']);

    }
    onChange(selectedValue: number) {
        this.getData(selectedValue);
    }
}

