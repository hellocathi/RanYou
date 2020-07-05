import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
@Component({
    selector: 'device-fault-column',
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
export class DeviceFaultColumnComponent implements OnInit {
    public data;
    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.data = [
            {
                "id": "1",
                "device_code": "rycz_20200529_01_sb_01",
                "device_name": "远航01燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
                "fault_device_count": 20,
                "fault_device_scale": 0.3,
            },
            {
                "id": "5",
                "device_code": "rycz_20200529_02_sb_02",
                "device_name": "神舟02燃油设备",
                "boat_id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号",
                "fault_device_count": 55,
                "fault_device_scale": 0.3,
            },
            {
                "id": "1",
                "device_code": "rycz_20200529_01_sb_01",
                "device_name": "远航03燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
                "fault_device_count": 76,
                "fault_device_scale": 0.3,
            },
            {
                "id": "5",
                "device_code": "rycz_20200529_02_sb_02",
                "device_name": "神舟04燃油设备",
                "boat_id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号",
                "fault_device_count": 80,
                "fault_device_scale": 0.3,
            },
            {
                "id": "1",
                "device_code": "rycz_20200529_01_sb_01",
                "device_name": "远航05燃油设备",
                "boat_id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
                "fault_device_count": 20,
                "fault_device_scale": 0.3,
            },
            {
                "id": "5",
                "device_code": "rycz_20200529_02_sb_02",
                "device_name": "神舟06燃油设备",
                "boat_id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号",
                "fault_device_count": 40,
                "fault_device_scale": 0.3,
            },
        ];
        //***********************改回来********************************* */
        //this.data = this.dataService.device_fault;
        //******************************************************** */
        const chart = new G2.Chart({
            container: 'device-column',
            forceFit: true,
            height: 500,
        });
        chart.scale({
            fault_device_count: {
                alias: '发生故障次数' // 为属性定义别名
            },
        });
        chart.source(this.data);
        chart.interval().position('device_name*fault_device_count')

        chart.render();

    }

}
