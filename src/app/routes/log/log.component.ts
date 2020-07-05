
import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styles: []
})
export class LogComponent implements OnInit {

  ngOnInit(): void {
    this.listOfData = [
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
    ];
    this.getData(null, null, null, null);
  }

  constructor(private apiService: ApiService) { }

  public listOfData: Array<any>;
  public inputValue = null;
  public selectedValue = null;
  public sort_key = null;
  public sort_value = null;

  getData(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    this.apiService.logList(find_key, find_vaule, sort_key, sort_value).then(data => {
      this.listOfData = data;
    });
  }
  search() {
    this.getData(this.selectedValue, this.inputValue, null, null);
  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.update();
  }
  update() {
    this.getData(this.selectedValue, this.inputValue, this.sort_key, this.sort_value);
  }
}
