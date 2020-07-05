import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
    selector: 'column-statistics',
    template: `
    <div style="color:white; font-size:20px;margin:4px 0 0 10px;text-align:center">案件分析</div>
    
    <select (change)="onChange($event.target.value)">
    <option value="1">近七天</option>
    <option value="2">近一月</option>
    <option value="3">近一季</option>
    <option value="4">近一年</option>
    <option value="5">全部</option>
    </select>
    <div class="a" id="statistics"></div>

  `,
    styles: [
        `
        option{
            background-color:white;
            color:black;
            }
        .a{
            margin:20px 0px 0px 0px;
           
          }
        select{
            margin: 15px 0px 0px 62%;
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
          
    `
    ]
})
export class ColumnStatisticsComponent implements OnInit {
    public data: Array<any>;
    constructor(private httpClient: HttpClient, private apiService: ApiService) {

    }

    getData(date: number) {
        this.apiService.CaseStudy(date).then(data => {
            this.getChart(data);
        });
    }
    ngOnInit() {
        this.data = [
            { "type": "fault", "abscissa": '一月', "value": 18.9 },
            { "type": "fault", "abscissa": '二月', "value": 28.8 },
            { "type": "fault", "abscissa": '三月', "value": 39.3 },
            { "type": "fault", "abscissa": '四月', "value": 81.4 },
            { "type": "fault", "abscissa": '五月', "value": 47 },
            { "type": "fault", "abscissa": '六月', "value": 20.3 },
            { "type": "fault", "abscissa": '七月', "value": 24 },
            { "type": "fault", "abscissa": '八月', "value": 35.6 },
            { "type": "fault", "abscissa": '九月', "value": 28.8 },
            { "type": "fault", "abscissa": '十月', "value": 39.3 },
            { "type": "fault", "abscissa": '十一月', "value": 81.4 },
            { "type": "fault", "abscissa": '十二月', "value": 47 },

            { "type": "warning", "abscissa": '一月', "value": 12.4 },
            { "type": "warning", "abscissa": '二月', "value": 23.2 },
            { "type": "warning", "abscissa": '三月', "value": 34.5 },
            { "type": "warning", "abscissa": '四月', "value": 99.7 },
            { "type": "warning", "abscissa": '五月', "value": 52.6 },
            { "type": "warning", "abscissa": '六月', "value": 35.5 },
            { "type": "warning", "abscissa": '七月', "value": 37.4 },
            { "type": "warning", "abscissa": '八月', "value": 42.4 },
            { "type": "warning", "abscissa": '九月', "value": 99.7 },
            { "type": "warning", "abscissa": '十月', "value": 52.6 },
            { "type": "warning", "abscissa": '十一月', "value": 35.5 },
            { "type": "warning", "abscissa": '十二月', "value": 37.4 },
        ];
        this.getData(1);

    }
    getChart(data) {
        const chart = new G2.Chart({
            container: 'statistics',
            forceFit: true,
            height: 350,
            padding: [45, 45, 60, 65]
        });
        chart.source(data);
        chart.scale({
            'type': {
                formatter(val) {
                    if (val === 'fault') { return '故障总数'; }
                    if (val === 'warning') { return '预警总数'; }
                },
            }
        });
        chart.axis('abscissa', {
            label: {//坐标轴文本的样式
                textStyle: {
                    fill: 'white'
                }
            },

        });
        chart.axis('value', {
            label: {//坐标轴文本的样式
                textStyle: {
                    fill: 'white'
                }
            },

        });
        chart.legend({
            position: 'top-right',
            marker: 'circle',
            offsetX: -300,
            offsetY: -8,
            textStyle: {
                fill: 'white',
                fontSize: 15,
            },
        });
        chart.interval().position('abscissa*value').color('type', ['l(90) 0:rgb(255,102,25) 1:rgb(252, 169, 128)', 'l(100) 0:rgb(12, 117, 234) 1:rgb(145, 195, 252)'])
            .opacity(1)
            .adjust([{
                type: 'dodge',
                marginRatio: 1 / 32
            }]);
        chart.render();

    }
    onChange(selectedValue: number) {
        this.getData(selectedValue);
    }
}
