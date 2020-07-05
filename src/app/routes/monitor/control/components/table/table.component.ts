import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'device-table',
  template: `
    <div style="padding-top:30px;text-align:left">
      <div class="line">
      <table  width=96%>
        <tr>
          <td class="label" rowspan="3">压力(P1~P13):<div>单位：bar</div></td>
          <td class="part"><span>粗滤器1前</span></td>
          <td class="value">0</td>
          <td class="part"><span>粗滤器2前</span></td>
          <td class="value">0.5</td>
          <td class="part"><span>供应泵1前</span></td>
          <td class="value">-0.2</td>
          <td class="part"><span>供应泵2前</span></td>
          <td class="value">0</td>
          <td class="part"><span>供应泵后</span></td>
          <td class="value">4.1</td>
        </tr>
        <tr>
          <td class="part"><span>增压泵1前</span></td>
          <td class="value">4.2</td>
          <td class="part"><span>增压泵2前</span></td>
          <td class="value">4.5</td>
          <td class="part"><span>增压泵后</span></td>
          <td class="value">10.2</td>
          <td class="part"><span>混油桶</span></td>
          <td class="value">3.5</td>
          <td class="part"><span>燃油出口</span></td>
          <td class="value">9.4</td>
        </tr>
        <tr>
          <td class="part"><span>自清滤器前</span></td>
          <td class="value">9.4</td>
          <td class="part"><span>自清滤器后</span></td>
          <td class="value">10</td>
          <td class="part"><span>热侧入口</span></td>
          <td class="value">7.2</td>
        </tr>
      </table>
      </div>
      <div class="line">
      <table width=96%>
        <tr>
          <td class="label" rowspan="3">温度(T1~T9):<div>单位：℃</div></td>
          <td class="part"><span>混油桶</span></td>
          <td class="value">120</td>
          <td class="part"><span>加热器1前</span></td>
          <td class="value">115</td>
          <td class="part"><span>加热器2前</span></td>
          <td class="value">126</td>
          <td class="part"><span>加热器后</span></td>
          <td class="value">142</td>
          <td class="part"><span>冷却器前</span></td>
          <td class="value">55</td>
        </tr>
        <tr>
          <td class="part"><span>冷却器后</span></td>
          <td class="value">42</td>
          <td class="part"><span>出口处</span></td>
          <td class="value">142</td>
          <td class="part"><span>混油桶前</span></td>
          <td class="value">87</td>
          <td class="part"><span>热侧入口</span></td>
          <td class="value">168</td>
        </tr>
      </table>
      </div>
      <table  width=90% style="margin:0 40px">
        <tr>
          <td class="label">粘度(V1):<div>单位：cSt</div></td>
          <td class="part"><span>加热器之后</span></td>
          <td class="value">12</td>
          <td class="part"></td>
          <td class="value"></td>
          <td class="part"></td>
          <td class="value"></td>
          <td class="part"></td>
          <td class="value"></td>
          <td class="part"></td>
          <td class="value"></td>
        </tr>
      </table>
    </div>
      
  `,
  styles: [
    `
    .line{
      margin:20px 30px;
      border-bottom:1px dashed #000;
    }
    .label{
      width:13%
    }
    
    .part{
      width:10.5%
    }
    .value{
      width:5.5%
    }
    span{
      color:blue
    }
    table{
      margin:10px 10px;
    }
   
    `
  ]
})
export class DeviceTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}