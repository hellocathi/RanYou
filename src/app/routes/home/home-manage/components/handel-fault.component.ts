import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
    selector: 'handel-fault',
    template: `
      <div class="case" style="color:white;font-size:20px">故障明示</div>
      <div class="r" id="ring"></div>
      <table>
          <tr>
              <td>已解决故障</td>
          </tr>
          <tr>
              <td class="number">{{data[0].fault_count}}<span>次</span></td>
          </tr>
          <tr>
              <td></td>
          </tr>
          <tr>
              <td>待解决故障</td>
          </tr>
          <tr>
              <td class="number">{{data[1].fault_count}}<span>次</span></td>
          </tr>
      </table>
  `,
    styles: [`
      .r {
          width: 60%;
          float: left;
          margin-top: 20px;
      }

      table {
          float: right;
          margin: 12% 55px 0px 0px;
      }

      .case {
          margin-left: 50px;
      }

      td {
          text-align: right;
          color: white;
          padding-top: 5px;
      }

      span {
          color: aqua;
      }

      .number {
          font-size: 23px;
      }

  `],
})
export class HandelFaultComponent implements OnInit {

    public data: Array<any>;
    constructor(private httpClient: HttpClient, private apiService: ApiService) {

    }



    getData() {
        this.apiService.faultOverview().then(data => {
            this.data = data;
            this.getChart(data);
        });
    }

    ngOnInit() {
        this.getData();
    }

    getChart(data) {
        const chart = new G2.Chart({
            container: 'ring',
            forceFit: true,
            height: 210,
            animate: false,
            padding: [-20, 0, 0, 0],
        });
        chart.source(data, {
            fault_scale: {
                formatter: val => {
                    val = (val * 100).toFixed(2) + '%';
                    return val;
                },
            },
        });
        chart.coord('theta', {
            radius: 0.75,
            innerRadius: 0.6,
        });
        chart.tooltip({
            showTitle: false,
            typeTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
        });
        // 辅助文本
        chart.guide().html({
            position: ['50%', '50%'],
            html: `<div style="color:white;font-size: 24px;text-align: center;width: 10em;">${(data[1].fault_scale * 100).toFixed(0)}%</div>`,
            alignX: 'middle',
            alignY: 'middle',
        });
        chart.legend(false);

        const interval = chart.intervalStack()
            .position('fault_scale')
            .color('type', ['#af4eff', 'white'])
            .tooltip('type*fault_scale', (type, fault_scale) => {
                fault_scale = (fault_scale * 100).toFixed(2) + '%';
                return {
                    name: type,
                    value: fault_scale,
                };
            });
        chart.render();
    }


}

