import { Component, OnInit } from '@angular/core';
import '@antv/g2-plugin-slider';
@Component({
  selector: 'app-pressure',
  template: `
  <div style=" margin-bottom:-10px;" id="pressure"></div>
  <div id="slider1">
  `,
  styles: [`

  `]
})
export class PressureComponent implements OnInit {
  ngOnInit() {

    fetch('assets/data/pressure.json')
      .then(res => res.json())
      .then(data => {
        const ds = new DataSet({
          state: {
            start: '2020/06/04-10:00:00',
            end: '2020/06/04-10:04:59',
          }
        });

        const dv = ds.createView();
        dv.source(data)
          .transform({ // !!! 根据状态量设置数据过滤规则，
            type: 'filter',
            callback: obj => {
              return obj.time <= ds.state.end && obj.time >= ds.state.start;
            }
          });
        const chart = new G2.Chart({
          container: 'pressure',
          forceFit: true,
          height: 400,
          padding: [40, 140, 50, 60]
        });
        chart.source(dv, {
          time: {
            type: 'time',
            tickCount: 10,
            mask: 'hh:mm:ss'
          },
        });
        // chart.source(dv, {
        //   "time": {
        //     range: [0, 1]
        //   }
        // });
        chart.scale({
          'part': {
            formatter(val) {
              if (val === 'P1') { return '粗滤器1前'; }
              if (val === 'P2') { return '粗滤器2前'; }
              if (val === 'P3') { return '供应泵1前'; }
              if (val === 'P4') { return '供应泵2前'; }
              if (val === 'P5') { return '供应泵后'; }
              if (val === 'P6') { return '增压泵1前'; }
              if (val === 'P7') { return '增压泵2前'; }
              if (val === 'P8') { return '增压泵后'; }
              if (val === 'P9') { return '混油桶'; }
              if (val === 'P10') { return '燃油出口'; }
              if (val === 'P11') { return '自清滤器前'; }
              if (val === 'P12') { return '自清滤器后'; }
              if (val === 'P13') { return '热侧入口'; }

            },
          }
        });
        chart.legend({
          position: 'right',
          offsetX: 0,
          textStyle: {
            fontSize: 14,
          },
        });
        chart.tooltip({
          crosshairs: {
            type: 'line'
          }
        });
        chart.filter('part', val => {
          return val === 'P1' || val === 'P5' || val === 'P8';
        });
        chart.line().position('time*value').color('part');
        chart.render();

        const slider = new Slider({
          container: 'slider1',
          data: data, // !!! 注意是原始数据，不要传入 dv
          xAxis: 'time',
          yAxis: 'value',
          padding: [0, 150, 0, 170],
          onChange: ({ startValue, endValue }) => {
            // !!! 更新状态量
            ds.setState('start', startValue);
            ds.setState('end', endValue);
          }
        });
        slider.render();
      });
  }

  constructor() {

  }



}
