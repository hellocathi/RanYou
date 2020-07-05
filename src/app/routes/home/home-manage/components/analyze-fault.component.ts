import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
    selector: 'analyze-fault',
    template: `
     <div style="color:white;font-size:20px;margin:0px 0 0 50px;">故障分析</div>
    
        <select (change)="onChange($event.target.value)">
            <option value="1">近七天</option>
            <option value="2">近一月</option>
            <option value="3">近一季</option>
            <option value="4">近一年</option>
            <option value="5">全部</option>
        </select>
    
     <div class="a" id="analyze"></div>
     <div style="float:right;margin:-20px 20px 0 0" >
        <button nz-button nzType="link" (click)="goDetails()" nzGhost><i nz-icon nzType="setting"></i>详情</button>
     </div>
  `,
    styles: [`
    option{
        background-color:white;
        color:black;
        }
    select{
        margin: 5px 0px 0px 31%;
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
        margin: 30px 0px 0px 0;
      }
`]
})
export class AnalyzeFaultComponent implements OnInit {
    public selectedValue = "sevenday";
    public data: Array<any>;
    constructor(private httpClient: HttpClient, public router: Router, private apiService: ApiService) {

    }

    ngOnInit() {
        this.getData(1);
    }
    getData(date: number) {
        this.apiService.FaultAnalysisList(date).then(data => {
            this.getChart(data);
        });
    }
    getChart(data) {
        const chart = new G2.Chart({
            container: 'analyze',
            forceFit: true,
            height: 210,
            animate: false,
            padding: [-10, 0, 0, -155]
        });
        chart.source(data, {
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
        chart.tooltip({
            showTitle: false,
            item_nameTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        });
        chart.legend({
            position: 'right-middle',
            offsetX: -145,
            offsetY: -40,
            textStyle: {
                fill: 'white',
                fontSize: 15,
            },
        });
        const interval = chart.intervalStack()
            .position('fault_scale')
            .color('fault_name', ['#0066ff', '#00ff37', '#00ffd5', '#ffff00', '#ff6600'])
            .opacity(1)
            .label('fault_scale', {
                offset: -7,
                textStyle: {
                    fill: 'white',
                    fontSize: 12,
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, .45)'
                },
                rotate: 0,
                autoRotate: false,
            });

        // chart.tooltip(false);
        chart.render();
        // interval.setSelected(data[0]);
    }
    goDetails() {
        this.router.navigate(['statistics-message/fault-statistics/fault-type']);

    }
    onChange(selectedValue: number) {
        this.getData(selectedValue);
    }
}
