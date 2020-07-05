import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-fault-message',
  templateUrl: './fault-message.component.html',
  styles: []
})
export class FaultMessageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  ngOnInit() {
    this.listOfData = [
      {
        "id": "1",
        "fault_id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "2",
        "fault_id": "2",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "3",
        "fault_id": "3",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "4",
        "fault_id": "4",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "5",
        "fault_id": "5",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "6",
        "fault_id": "6",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "7",
        "fault_id": "7",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "8",
        "fault_id": "8",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "9",
        "fault_id": "5",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },
      {
        "id": "10",
        "fault_id": "6",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_deal": 1,
        "is_delete": 0,
      },

    ];

    this.getData(null, null, null, null);
  }
  public listOfData: Array<any>;
  public listOfDisplayData;
  public selectedValue = null;
  public inputValue = null;
  public sort_key = null;
  public sort_value = null;

  getData(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    this.apiService.faultRecordList(find_key, find_vaule, sort_key, sort_value).then(data => {
      this.listOfData = data;
      this.listOfDisplayData = this.listOfData.map((data) => {
        if (data.is_deal == 0) {
          data.is_deal_over = "否";
          data.is_deal_button = false;
          return data;
        }
        if (data.is_deal == 1) {
          data.is_deal_over = "是";
          data.is_deal_button = true;
          return data;
        }
      });
    });
  }

  search() {
    this.getData(this.selectedValue, this.inputValue, null, null);

  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.getData(this.selectedValue, this.inputValue, this.sort_key, this.sort_value);
  }
  deal(id: number) {
    this.apiService.faultmessage_deal(id);
    this.getData(this.selectedValue, this.inputValue, this.sort_key, this.sort_value);
  }

}
