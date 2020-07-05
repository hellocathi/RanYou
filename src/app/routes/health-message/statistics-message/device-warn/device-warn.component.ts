
import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
import { DataService } from '../data.service'

@Component({
  selector: 'app-device-warn',
  templateUrl: './device-warn.component.html',
  styles: []
})
export class DeviceWarnComponent implements OnInit {
  ngOnInit(): void {
    this.listOfData = [
      {
        "id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "6",
        "device_code": "rycz_20200529_02_sb_03",
        "device_name": "神舟03燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "6",
        "device_code": "rycz_20200529_02_sb_03",
        "device_name": "神舟03燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "6",
        "device_code": "rycz_20200529_02_sb_03",
        "device_name": "神舟03燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "6",
        "device_code": "rycz_20200529_02_sb_03",
        "device_name": "神舟03燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
      {
        "id": "6",
        "device_code": "rycz_20200529_02_sb_03",
        "device_name": "神舟03燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "warning_device_count": 20,
        "warning_device_scale": 0.3,
      },
    ];
    this.getData(null, null, null, null, 1);
  }
  constructor(private apiService: ApiService, private dataService: DataService) { }


  public dateValue;
  public selectedLabel = "近七天预警统计";
  public listOfData: Array<any>;

  public inputValue = null;
  public selectedValue = null;
  public sort_key = null;
  public sort_value = null;


  getData(find_key: string, find_vaule: string, sort_key: string, sort_value: string, date: number) {
    this.apiService.statistics_device_warn(find_key, find_vaule, sort_key, sort_value, date).then(data => {
      this.listOfData = data;
      this.dataService.device_warn = data;
    });
  }

  date(values: number): void {
    if (values == 1) {
      this.selectedLabel = "近七天预警统计";
    };
    if (values == 2) {
      this.selectedLabel = "近一月预警统计";
    };
    if (values == 3) {
      this.selectedLabel = "近一季预警统计";
    };
    if (values == 4) {
      this.selectedLabel = "近一年预警统计";
    };
    if (values == 5) {
      this.selectedLabel = "全部预警统计";
    };
    this.dateValue = values;
    this.update();
  }

  search() {
    this.getData(this.selectedValue, this.inputValue, null, null, this.dateValue);
  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.update();
  }
  update() {
    this.getData(this.selectedValue, this.inputValue, this.sort_key, this.sort_value, this.dateValue);
  }

}
