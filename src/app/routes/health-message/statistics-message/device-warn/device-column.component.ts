import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
    selector: 'device-warn-column',
    template: `
    <div class="a" id="device-column"></div>
  `,
    styles: [
        `
        .a{
            margin:0px 50px 0px 10px;
        }
    `
    ]
})
export class DeviceWarnColumnComponent implements OnInit {
    public data;
    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.data = [
            {
                "id": "2",
                "device_code": "rycz_20200529_01_sb_02",
                "device_name": "远航01燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
                "warning_device_count": 20,
                "warning_device_scale": 0.3,
            },
            {
                "id": "6",
                "device_code": "rycz_20200529_02_sb_03",
                "device_name": "神舟01燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号",
                "warning_device_count": 30,
                "warning_device_scale": 0.3,
            },
            {
                "id": "2",
                "device_code": "rycz_20200529_01_sb_02",
                "device_name": "远航02燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
                "warning_device_count": 60,
                "warning_device_scale": 0.3,
            },
            {
                "id": "6",
                "device_code": "rycz_20200529_02_sb_03",
                "device_name": "神舟02燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号",
                "warning_device_count": 9,
                "warning_device_scale": 0.3,
            },
            {
                "id": "2",
                "device_code": "rycz_20200529_01_sb_02",
                "device_name": "远航03燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
                "warning_device_count": 58,
                "warning_device_scale": 0.3,
            },
            {
                "id": "6",
                "device_code": "rycz_20200529_02_sb_03",
                "device_name": "神舟03燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号",
                "warning_device_count": 43,
                "warning_device_scale": 0.3,
            },
            {
                "id": "2",
                "device_code": "rycz_20200529_01_sb_02",
                "device_name": "远航04燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
                "warning_device_count": 20,
                "warning_device_scale": 0.3,
            },
            {
                "id": "6",
                "device_code": "rycz_20200529_02_sb_03",
                "device_name": "神舟04燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号",
                "warning_device_count": 30,
                "warning_device_scale": 0.3,
            },
            {
                "id": "2",
                "device_code": "rycz_20200529_01_sb_02",
                "device_name": "远航05燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
                "warning_device_count": 63,
                "warning_device_scale": 0.3,
            },
            {
                "id": "6",
                "device_code": "rycz_20200529_02_sb_03",
                "device_name": "神舟05燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号",
                "warning_device_count": 50,
                "warning_device_scale": 0.3,
            },
        ];
        //***********************改回来********************************* */
        //this.data = this.dataService.device_warn;
        //******************************************************** */
        const chart = new G2.Chart({
            container: 'device-column',
            forceFit: true,
            height: 500,
        });
        chart.scale({
            fault_device_count: {
                alias: '发生预警次数' // 为属性定义别名
            },
        });
        chart.source(this.data);
        chart.interval().position('device_name*warning_device_count')

        chart.render();

    }

}
