import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
@Component({
    selector: 'ship-fault-column',
    template: `
    <div class="a" id="ship-column"></div>
  `,
    styles: [
        `
        .a{
            margin:0px 50px 0px 10px;
        }
    `
    ]
})
export class ShipFaultColumnComponent implements OnInit {
    public data;
    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.data = [
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号1",
                "fault_boat_count": 20,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号2",
                "fault_boat_count": 50,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号3",
                "fault_boat_count": 33,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号4",
                "fault_boat_count": 56,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号5",
                "fault_boat_count": 47,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号6",
                "fault_boat_count": 89,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号7",
                "fault_boat_count": 40,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号8",
                "fault_boat_count": 20,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号9",
                "fault_boat_count": 105,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号10",
                "fault_boat_count": 76,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号11",
                "fault_boat_count": 83,
                "fault_boat_scale": 0.3,
            },
            {
                "id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神舟号12",
                "fault_boat_count": 45,
                "fault_boat_scale": 0.3,
            },
        ];

        //***********************改回来********************************* */
        //this.data = this.dataService.ship_fault;
        //******************************************************** */
        const chart = new G2.Chart({
            container: 'ship-column',
            forceFit: true,
            height: 500,
        });
        chart.scale({
            fault_boat_count: {
                alias: '发生故障次数' // 为属性定义别名
            },
        });
        chart.source(this.data);
        chart.interval().position('boat_name*fault_boat_count')

        chart.render();

    }

}
