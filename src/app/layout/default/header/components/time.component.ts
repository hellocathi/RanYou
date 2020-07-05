import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
    selector: 'header-time',
    template: `
    <table style="margin-right:15px;" >
        <tr>
            <td class="time" id="time" rowspan="2"></td>
            <td class="date" id="week" style="float:right;"></td>
        </tr>
        <tr>
            <td class="date" id="date"></td>
        </tr>
    </table>
   
  `,
    styles: [`
    @font-face {
        font-family: 'UnidreamLED';
        src:url(assets/UnidreamLED/UnidreamLED.eot);
        src:url(assets/UnidreamLED/UnidreamLED.eot?#iefix)format('embedded-opentype'),
        url('assets/UnidreamLED/UnidreamLED.woff') format('woff'), 
        local('UnidreamLED'), url("assets/UnidreamLED/UnidreamLED.woff");
      }
    .time{
        font-family:'UnidreamLED';
        font-size:30px;
        color:white;
        width:125px;
    }
    .date{
        color:white;
        margin-top:-10px;
    }
  
  `]
})
@Pipe({
    name: 'formatDay'
})

export class HeaderTimeComponent implements PipeTransform {
    public time = '';
    public date = '';
    public week = '';
    public timer;
    h; m; s;
    constructor(public navCtrl: NavController) {
        this.timer = setInterval(() => {

            let date = new Date();
            this.h = date.getHours();
            if (this.h < 10) this.h = '0' + this.h;
            // 在1后面加空格
            if (Math.floor(this.h / 10) == 1 || this.h % 10 == 1) this.h = Math.floor(this.h / 10) + ' ' + this.h % 10;

            this.m = date.getMinutes();
            if (this.m < 10) this.m = '0' + this.m;
            if (Math.floor(this.m / 10) == 1 || this.m % 10 == 1) this.m = Math.floor(this.m / 10) + ' ' + this.m % 10;

            this.s = date.getSeconds();
            if (this.s < 10) this.s = '0' + this.s;
            if (Math.floor(this.s / 10) == 1 || this.s % 10 == 1) this.s = Math.floor(this.s / 10) + ' ' + this.s % 10;

            this.time = this.h + ' : ' + this.m + ' : ' + this.s;
            let y = date.getFullYear();
            let m = date.getUTCMonth() + 1;
            let d = date.getDate();
            this.date = y + '-' + m + '-' + d;
            this.week = this.transform(this.date);
            document.getElementById("time").innerHTML = this.time;
            document.getElementById("date").innerHTML = this.date;
            document.getElementById("week").innerHTML = this.week;
        }, 1000);

    }

    transform(value: any): any {
        if (value !== undefined) {
            let weekArray = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
            let myDate = new Date(value);
            let week = weekArray[myDate.getDay()];
            return week;
        }
    }
}
