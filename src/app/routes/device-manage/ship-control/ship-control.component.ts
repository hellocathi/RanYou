import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddShipComponent } from './components/add-ship.component';
import { EditService } from '../service/edit.service'
import { EditShipComponent } from './components/edit-ship.component';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-ship-control',
  templateUrl: './ship-control.component.html',
  styles: []
})
export class ShipControlComponent implements OnInit {

  ngOnInit(): void {

    this.listOfData = [
      {
        "id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },
      {
        "id": "2",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },

      {
        "id": "3",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },
      {
        "id": "4",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },

      {
        "id": "5",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },
      {
        "id": "6",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },

      {
        "id": "7",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },
      {
        "id": "8",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },

      {
        "id": "9",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },
      {
        "id": "10",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },

      {
        "id": "11",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },
      {
        "id": "12",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },

      {
        "id": "13",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },
      {
        "id": "14",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神州号",
        "created_at": "2020-05-26 15:10:2",
        "is_delete": 0,
      },
    ];

    this.getData(null, null, null, null);
  }

  getData(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    this.apiService.boatList(find_key, find_vaule, sort_key, sort_value).then(data => {
      this.listOfData = data;
    });
  }

  constructor(private message: NzMessageService, private httpClient: HttpClient,
    private apiService: ApiService, private modalService: NzModalService,
    public router: Router, private editService: EditService) {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.update();
      }
    });
  }

  public selectedValue = null;
  public inputValue = null;
  public sort_key = null;
  public sort_value = null;

  public navigationSubscription;
  public listOfData: Array<any>;
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: Array<any> = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  currentPageDataChange($event): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
    this.apiService.boat_delete(id);
  }
  startEdit(data) {
    this.editService.edit_ship = data;
    const modal = this.modalService.create({
      nzTitle: '修改设备信息',
      nzContent: EditShipComponent,
      nzWidth: 500,
      nzFooter: null,
    });
  }

  Bigdelete() {

    var deleteid2 = [];
    let deleteid = Object.getOwnPropertyNames(this.mapOfCheckedId);
    for (let i = 0; i < deleteid.length; i++) {
      deleteid2.push(parseInt(deleteid[i]));
    }
    var deleteid_string = deleteid2.toString();
    this.modalService.confirm({
      nzTitle: '您确定删除所选船只信息吗?',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.apiService.boat_delete(deleteid_string);
        this.message.create("success", "删除成功！");
      }
    });
  }
  addUser() {
    const modal = this.modalService.create({
      nzTitle: '添加新船只',
      nzContent: AddShipComponent,
      nzWidth: 500,
      nzFooter: null,
    });
  }
  ngOnDestroy(): void {
    // 销毁navigationSubscription，避免内存泄漏
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
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

