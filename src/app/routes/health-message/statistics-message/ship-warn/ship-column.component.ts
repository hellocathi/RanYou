import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
    selector: 'ship-warn-column',
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
export class ShipWarnColumnComponent implements OnInit {
    public data;
    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.data = [
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号1",
                "warning_boat_count": 35,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号2",
                "warning_boat_count": 63,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号3",
                "warning_boat_count": 45,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号4",
                "warning_boat_count": 28,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号5",
                "warning_boat_count": 60,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号6",
                "warning_boat_count": 50,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号7",
                "warning_boat_count": 60,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号8",
                "warning_boat_count": 70,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号9",
                "warning_boat_count": 100,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号10",
                "warning_boat_count": 80,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号11",
                "warning_boat_count": 50,
                "warning_boat_scale": 0.3,
            },
            {
                "id": "1",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号12",
                "warning_boat_count": 60,
                "warning_boat_scale": 0.3,
            },
        ];
        //***********************改回来********************************* */
        //this.data = this.dataService.ship_warn;
        //******************************************************** */
        const chart = new G2.Chart({
            container: 'ship-column',
            forceFit: true,
            height: 500,
        });
        chart.scale({
            fault_boat_count: {
                alias: '发生预警次数' // 为属性定义别名
            },
        });
        chart.source(this.data);
        chart.interval().position('boat_name*warning_boat_count')

        chart.render();

    }

}
