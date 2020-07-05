import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'tend-chart',
  template: `
    <div style="color:white; font-size:20px; margin:5px 0 0 10px;text-align:center">趋势图</div>
    <select (change)="onChange($event.target.value)">
      <option value="1">近七天</option>
      <option value="2">近一月</option>
      <option value="3">近一季</option>
      <option value="4">近一年</option>
      <option value="5">全部</option>
    </select>
    <div class="a" id="tend"></div>
  `,
  styles: [`
    
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
      
      `]
})
//-webkit-appearance:initial;select去掉倒三角
export class TendChartComponent implements OnInit {
  public data: Array<any>;
  constructor(private httpClient: HttpClient, private apiService: ApiService) {

  }

  getData(date: number) {
    this.apiService.tend(date).then(data => {
      this.getChart(data);
    });
  }
  ngOnInit() {
    this.data = [
      { abscissa: '一月', fault: 17, warning: 50, device: 200, boat: 152 },
      { abscissa: '二月', fault: 26, warning: 44, device: 210, boat: 160 },
      { abscissa: '三月', fault: 19, warning: 35, device: 215, boat: 170 },
      { abscissa: '四月', fault: 45, warning: 30, device: 210, boat: 167 },
      { abscissa: '五月', fault: 38, warning: 65, device: 250, boat: 167 },
      { abscissa: '六月', fault: 21, warning: 50, device: 252, boat: 168 },
      { abscissa: '七月', fault: 25, warning: 55, device: 260, boat: 170 },
      { abscissa: '八月', fault: 26, warning: 56, device: 260, boat: 180 },
      { abscissa: '九月', fault: 23, warning: 34, device: 254, boat: 182 },
      { abscissa: '十月', fault: 18, warning: 39, device: 260, boat: 182 },
      { abscissa: '十一月', fault: 13, warning: 40, device: 262, boat: 185 },
      { abscissa: '十二月', fault: 9, warning: 34, device: 270, boat: 185 }
    ];

    this.getData(1);

  }
  getChart(data) {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'rename',
      map: {
        fault: '故障',
        warning: '预警',
        device: '设备',
        boat: '船只',
      }
    });
    // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
    dv.transform({
      type: 'fold',
      fields: ['船只', '设备', '预警', '故障'], // 展开字段集
      key: 'city', // key字段
      value: 'temperature' // value字段
    });
    const chart = new G2.Chart({
      container: 'tend',
      forceFit: true,
      height: 350,
      padding: [45, 45, 60, 65]
    });
    chart.source(dv, {
      abscissa: {
        range: [0, 1]
      }
    });

    chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    });

    chart.axis('abscissa', {
      label: {//坐标轴文本的样式
        textStyle: {
          fill: 'white'
        }
      },

    });

    chart.axis('temperature', {
      label: {//坐标轴文本的样式
        textStyle: {
          fill: 'white'
        }
      },
    });
    chart.legend({

      position: 'top-left',
      marker: 'circle',
      offsetX: 70,
      offsetY: -8,
      textStyle: {
        fill: 'white',
        fontSize: 15,
      },
    });

    chart.area()
      .position('abscissa*temperature')
      .color('city', ['l(100) 0:#00ff4c 1:#caffda', 'l(100) 0:#0044ff 1:#d1ddff', 'l(100) 0:#ae00ff 1:#f0d1ff', 'l(100) 0:#ff006a 1:#ffd4e6'])
      .shape('smooth')
      .opacity(0.8);
    chart.render();
  }

  onChange(selectedValue: number) {
    this.getData(selectedValue);
  }

}