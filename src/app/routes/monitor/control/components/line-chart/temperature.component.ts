import { Component, OnInit, Input } from '@angular/core';
import '@antv/g2-plugin-slider';
@Component({
  selector: 'app-temperature',
  template: `
  <div style=" margin-bottom:-10px;" id="temperature"></div>
  <div id="slider2">
  `,
  styles: [
    `
    `
  ]
})
export class TemperatureComponent implements OnInit {
  ngOnInit() {
    const data = [

      { "time": "2020/06/04-10:00:00", "part": "T1", "value": 100 },
      { "time": "2020/06/04-10:00:01", "part": "T1", "value": 120 },
      { "time": "2020/06/04-10:00:02", "part": "T1", "value": 90 },
      { "time": "2020/06/04-10:00:03", "part": "T1", "value": 83 },
      { "time": "2020/06/04-10:00:04", "part": "T1", "value": 130 },
      { "time": "2020/06/04-10:00:05", "part": "T1", "value": 120 },
      { "time": "2020/06/04-10:00:06", "part": "T1", "value": 143 },
      { "time": "2020/06/04-10:00:07", "part": "T1", "value": 80 },
      { "time": "2020/06/04-10:00:08", "part": "T1", "value": 125 },
      { "time": "2020/06/04-10:00:09", "part": "T1", "value": 102 },

      { "time": "2020/06/04-10:00:00", "part": "T2", "value": 98 },
      { "time": "2020/06/04-10:00:01", "part": "T2", "value": 65 },
      { "time": "2020/06/04-10:00:02", "part": "T2", "value": 120 },
      { "time": "2020/06/04-10:00:03", "part": "T2", "value": 130 },
      { "time": "2020/06/04-10:00:04", "part": "T2", "value": 124 },
      { "time": "2020/06/04-10:00:05", "part": "T2", "value": 130 },
      { "time": "2020/06/04-10:00:06", "part": "T2", "value": 95 },
      { "time": "2020/06/04-10:00:07", "part": "T2", "value": 73 },
      { "time": "2020/06/04-10:00:08", "part": "T2", "value": 140 },
      { "time": "2020/06/04-10:00:09", "part": "T2", "value": 135 },

      { "time": "2020/06/04-10:00:00", "part": "T3", "value": 100 },
      { "time": "2020/06/04-10:00:01", "part": "T3", "value": 146 },
      { "time": "2020/06/04-10:00:02", "part": "T3", "value": 120 },
      { "time": "2020/06/04-10:00:03", "part": "T3", "value": 123 },
      { "time": "2020/06/04-10:00:04", "part": "T3", "value": 136 },
      { "time": "2020/06/04-10:00:05", "part": "T3", "value": 112 },
      { "time": "2020/06/04-10:00:06", "part": "T3", "value": 134 },
      { "time": "2020/06/04-10:00:07", "part": "T3", "value": 120 },
      { "time": "2020/06/04-10:00:08", "part": "T3", "value": 140 },
      { "time": "2020/06/04-10:00:09", "part": "T3", "value": 119 },

      { "time": "2020/06/04-10:00:00", "part": "T4", "value": 142 },
      { "time": "2020/06/04-10:00:01", "part": "T4", "value": 106 },
      { "time": "2020/06/04-10:00:02", "part": "T4", "value": 142 },
      { "time": "2020/06/04-10:00:03", "part": "T4", "value": 150 },
      { "time": "2020/06/04-10:00:04", "part": "T4", "value": 165 },
      { "time": "2020/06/04-10:00:05", "part": "T4", "value": 123 },
      { "time": "2020/06/04-10:00:06", "part": "T4", "value": 134 },
      { "time": "2020/06/04-10:00:07", "part": "T4", "value": 108 },
      { "time": "2020/06/04-10:00:08", "part": "T4", "value": 145 },
      { "time": "2020/06/04-10:00:09", "part": "T4", "value": 143 },

      { "time": "2020/06/04-10:00:00", "part": "T5", "value": 56 },
      { "time": "2020/06/04-10:00:01", "part": "T5", "value": 43 },
      { "time": "2020/06/04-10:00:02", "part": "T5", "value": 60 },
      { "time": "2020/06/04-10:00:03", "part": "T5", "value": 65 },
      { "time": "2020/06/04-10:00:04", "part": "T5", "value": 70 },
      { "time": "2020/06/04-10:00:05", "part": "T5", "value": 56 },
      { "time": "2020/06/04-10:00:06", "part": "T5", "value": 57 },
      { "time": "2020/06/04-10:00:07", "part": "T5", "value": 45 },
      { "time": "2020/06/04-10:00:08", "part": "T5", "value": 50 },
      { "time": "2020/06/04-10:00:09", "part": "T5", "value": 53 },

      { "time": "2020/06/04-10:00:00", "part": "T6", "value": 50 },
      { "time": "2020/06/04-10:00:01", "part": "T6", "value": 42 },
      { "time": "2020/06/04-10:00:02", "part": "T6", "value": 45 },
      { "time": "2020/06/04-10:00:03", "part": "T6", "value": 43 },
      { "time": "2020/06/04-10:00:04", "part": "T6", "value": 50 },
      { "time": "2020/06/04-10:00:05", "part": "T6", "value": 58 },
      { "time": "2020/06/04-10:00:06", "part": "T6", "value": 60 },
      { "time": "2020/06/04-10:00:07", "part": "T6", "value": 63 },
      { "time": "2020/06/04-10:00:08", "part": "T6", "value": 54 },
      { "time": "2020/06/04-10:00:09", "part": "T6", "value": 49 },

      { "time": "2020/06/04-10:00:00", "part": "T7", "value": 142 },
      { "time": "2020/06/04-10:00:01", "part": "T7", "value": 123 },
      { "time": "2020/06/04-10:00:02", "part": "T7", "value": 130 },
      { "time": "2020/06/04-10:00:03", "part": "T7", "value": 149 },
      { "time": "2020/06/04-10:00:04", "part": "T7", "value": 152 },
      { "time": "2020/06/04-10:00:05", "part": "T7", "value": 160 },
      { "time": "2020/06/04-10:00:06", "part": "T7", "value": 134 },
      { "time": "2020/06/04-10:00:07", "part": "T7", "value": 125 },
      { "time": "2020/06/04-10:00:08", "part": "T7", "value": 130 },
      { "time": "2020/06/04-10:00:09", "part": "T7", "value": 145 },

      { "time": "2020/06/04-10:00:00", "part": "T8", "value": 82 },
      { "time": "2020/06/04-10:00:01", "part": "T8", "value": 86 },
      { "time": "2020/06/04-10:00:02", "part": "T8", "value": 94 },
      { "time": "2020/06/04-10:00:03", "part": "T8", "value": 76 },
      { "time": "2020/06/04-10:00:04", "part": "T8", "value": 82 },
      { "time": "2020/06/04-10:00:05", "part": "T8", "value": 81 },
      { "time": "2020/06/04-10:00:06", "part": "T8", "value": 75 },
      { "time": "2020/06/04-10:00:07", "part": "T8", "value": 58 },
      { "time": "2020/06/04-10:00:08", "part": "T8", "value": 85 },
      { "time": "2020/06/04-10:00:09", "part": "T8", "value": 89 },

      { "time": "2020/06/04-10:00:00", "part": "T9", "value": 165 },
      { "time": "2020/06/04-10:00:01", "part": "T9", "value": 162 },
      { "time": "2020/06/04-10:00:02", "part": "T9", "value": 150 },
      { "time": "2020/06/04-10:00:03", "part": "T9", "value": 143 },
      { "time": "2020/06/04-10:00:04", "part": "T9", "value": 170 },
      { "time": "2020/06/04-10:00:05", "part": "T9", "value": 150 },
      { "time": "2020/06/04-10:00:06", "part": "T9", "value": 163 },
      { "time": "2020/06/04-10:00:07", "part": "T9", "value": 180 },
      { "time": "2020/06/04-10:00:08", "part": "T9", "value": 158 },
      { "time": "2020/06/04-10:00:09", "part": "T9", "value": 157 },

      { "time": "2020/06/04-10:00:00", "part": "V1", "value": 9 },
      { "time": "2020/06/04-10:00:01", "part": "V1", "value": 10 },
      { "time": "2020/06/04-10:00:02", "part": "V1", "value": 11 },
      { "time": "2020/06/04-10:00:03", "part": "V1", "value": 15 },
      { "time": "2020/06/04-10:00:04", "part": "V1", "value": 10 },
      { "time": "2020/06/04-10:00:05", "part": "V1", "value": 16 },
      { "time": "2020/06/04-10:00:06", "part": "V1", "value": 23 },
      { "time": "2020/06/04-10:00:07", "part": "V1", "value": 12 },
      { "time": "2020/06/04-10:00:08", "part": "V1", "value": 11 },
      { "time": "2020/06/04-10:00:09", "part": "V1", "value": 9 },


    ];
    const ds = new DataSet({
      state: {
        start: '2020/06/04-10:00:00',
        end: '2020/06/04-10:00:09',
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
      container: 'temperature',
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
    chart.scale({
      'part': {
        formatter(val) {
          if (val === 'T1') { return '混油桶'; }
          if (val === 'T2') { return '加热器1前'; }
          if (val === 'T3') { return '加热器2前'; }
          if (val === 'T4') { return '加热器后'; }
          if (val === 'T5') { return '冷却器前'; }
          if (val === 'T6') { return '冷却器后'; }
          if (val === 'T7') { return '出口处'; }
          if (val === 'T8') { return '混油桶前'; }
          if (val === 'T9') { return '热侧入口'; }
          if (val === 'V1') { return '加热器之后'; }

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
      return val === 'T1' || val === 'T4' || val === 'T4' || val === 'V1';
    });
    chart.line().position('time*value').color('part');
    chart.render();

    const slider = new Slider({
      container: 'slider2',
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
  }
  constructor() {

  }



}
