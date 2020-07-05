import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styles: [],

})
export class ControlComponent implements OnInit {
  public green: boolean = false;
  public yellow: boolean = false;
  public red: boolean = false;
  public current_status: string;
  getcascaderId(info: number) {//获取选择的设备
    this.getData(info);

  }
  getData(id: number) {
    this.apiService.current_status(id).then(data => {
      this.current_status = data;
      if (data = "正常") {
        this.green = true;
      }
      if (data = "预警") {
        this.yellow = true;
      }
      if (data = "故障") {
        this.red = true;
      }

    });
  }
  constructor(private apiService: ApiService) {

  }
  ngOnInit() {
  }

}
