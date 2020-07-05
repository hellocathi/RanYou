import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';
import { DataService } from '../../data.service'
@Component({
    selector: 'fault-ring-chart',
    template: `
  <div class="a" id="ring"></div>
  `,
    styles: [`
    .a{
        margin:0px 50px;
    }
    `]
})
export class FaultRingChartComponent implements OnInit {
    public number = 0;
    public data;
    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.data = [
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通1",
                "fault_count": 20,
                "fault_scale": 0.2,
            },
            {
                "id": "1",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞2",
                "fault_count": 8,
                "fault_scale": 0.08,
            },
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通3",
                "fault_count": 6,
                "fault_scale": 0.06,
            },
            {
                "id": "1",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞4",
                "fault_count": 14,
                "fault_scale": 0.14,
            },
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通5",
                "fault_count": 15,
                "fault_scale": 0.15,
            },
            {
                "id": "1",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞6",
                "fault_count": 6,
                "fault_scale": 0.06,
            },
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通7",
                "fault_count": 2,
                "fault_scale": 0.02,
            },
            {
                "id": "1",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞8",
                "fault_count": 10,
                "fault_scale": 0.1,
            },
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通9",
                "fault_count": 6,
                "fault_scale": 0.06,
            },
            {
                "id": "1",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞10",
                "fault_count": 3,
                "fault_scale": 0.03,
            },
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通11",
                "fault_count": 2,
                "fault_scale": 0.02,
            },
            {
                "id": "1",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞12",
                "fault_count": 3,
                "fault_scale": 0.03,
            },
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通13",
                "fault_count": 1,
                "fault_scale": 0.01,
            },
            {
                "id": "1",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞14",
                "fault_count": 4,
                "fault_scale": 0.04,
            },
        ];
        //***********************改回来********************************* */
        //this.data = this.dataService.fault_type;
        //******************************************************** */
        for (let i = 0; i < this.data.length; i++) {
            this.number += this.data[i].fault_count;
        }
        //console.log(this.number);
        const chart = new G2.Chart({
            container: 'ring',
            forceFit: true,
            height: 500,
            animate: false
        });
        chart.source(this.data, {
            fault_scale: {
                formatter: val => {
                    val = (val * 100).toFixed(2) + '%';
                    return val;

                }
            }
        });
        chart.coord('theta', {
            radius: 0.75,
            innerRadius: 0.6
        });
        chart.legend({
            textStyle: {
                fontSize: '15',
            }
        });
        chart.tooltip({
            showTitle: false,
            itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: 发生故障{count}次</li>'
        });
        // 辅助文本
        chart.guide().html({
            position: ['50%', '52%'],
            html: `<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">发生故障<br><span style="color:#8c8c8c;font-size:20px">${this.number}</span>次</div>`,
            alignX: 'middle',
            alignY: 'middle'
        });
        const interval = chart.intervalStack()
            .position('fault_scale')
            .color('fault_name')
            .label('fault_scale', {
                formatter: (val, item) => {
                    return item.point.fault_name + ': ' + val;
                },
                textStyle: {
                    fontSize: '14',
                }
            })

            .tooltip('fault_name*fault_scale*fault_count', (item, percent, count) => {
                percent = (percent * 100).toFixed(2) + '%';
                return {
                    name: item,
                    value: percent,
                    count: count
                };
            })
            .style({
                lineWidth: 1,
                stroke: '#fff'
            });
        chart.render();
        interval.setSelected(this.data[0]);

    }

}
