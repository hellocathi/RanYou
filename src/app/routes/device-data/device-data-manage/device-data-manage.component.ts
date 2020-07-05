import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-device-data',
  templateUrl: './device-data-manage.component.html',
  styles: []
})
export class DeviceDataManageComponent implements OnInit {

  ngOnInit(): void {
    this.listOfData = [
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },
      {
        "id": "1",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航01燃油设备",
        "data": "23个数据字段",
        "time": "2020-05-26 15:10:20",
        "is_delete": 0,
      },

    ];
    this.getData(null, null, null, null);
  }

  getData(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    this.apiService.rawDataList(find_key, find_vaule, sort_key, sort_value).then(data => {
      this.listOfData = data;
      for (let i = 0; i < this.listOfData.length; ++i) {
        this.listOfData[i].expend = false;
      }
    });
  }
  public listOfData: Array<any>;
  public selectedValue = null;
  public inputValue = null;
  constructor(private apiService: ApiService) { }

  search() {
    this.getData(this.selectedValue, this.inputValue, null, null);

  }
  sort(info) {
    this.getData(this.selectedValue, this.inputValue, info.key, info.value);
  }
}
