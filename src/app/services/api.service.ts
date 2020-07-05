import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { StompService, StompState } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public err;
  constructor(private httpClient: HttpClient, private _stompService: StompService, ) { }

  /********************消息队列 **********************/
  public messages: Observable<Message>;
  // Subscription status
  public subscribed: boolean;
  // Array of historic message (bodies)
  private subscription: Subscription;

  //现有故障
  public fault_subscribe() {

    if (this.subscribed) {
      return;
    }
    // Stream of messages
    this.messages = this._stompService.subscribe('/web-know-fault');

    // Subscribe a function to be run on_next message
    this.subscription = this.messages.subscribe(this.fault_on_next);

    this.subscribed = true;

  }
  public fault_on_next = (message: Message) => {
    //解析消息队列,返回数据  message.body
  }

  //现有预警
  public warn_subscribe() {
    this.messages = this._stompService.subscribe('/web-know-warning');
    this.subscription = this.messages.subscribe(this.warn_on_next);
  }
  public warn_on_next = (message: Message) => {
    //解析消息队列,返回数据
  }


  //状态监测
  public monitor_subscribe(id: string) {
    this.messages = this._stompService.subscribe('/initial-data', { id: id });
    this.subscription = this.messages.subscribe(this.monitor_on_next);
  }
  public monitor_on_next = (message: Message) => {
    //解析消息队列,返回数据
  }
  //知识库优化
  public optimization_subscribe() {
    this.messages = this._stompService.subscribe('/web-optimization');
    this.subscription = this.messages.subscribe(this.on_next);
  }

  public on_next = (message: Message) => {
    //解析消息队列,返回数据
    //解析消息队列，如果有消息，优化按钮显示，否则不显示。
    //获取故障库优化id

    // this.id = [1, 2];
    // if (this.id = null) {
    //     this.button = true;
    // } else {
    //     this.button = false;
    // }
  }


  //*************************api****************************** */

  //**********指示灯************ */
  //获取当前未处理故障数量
  not_deal_fault() {
    const url: string = '/api/get/fault/notdeal/amount';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        return data['data']['current_not_deal_fault'];
      })
      .catch(this.err);
  }


  //获取当前未处理故障数量
  not_deal_warning() {
    const url: string = '/api/get/warning/notdeal/amount';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        return data['data']['current_not_deal_warning'];
      })
      .catch(this.err);
  }

  //获取当前未处理故障信息
  faultList(id: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/fault/notdeal/information';
    return this.httpClient.post(url,
      { id: id, sort_key: sort_key, sort_value: sort_value })
      .toPromise()
      .then(data => {
        return data['data']['faultList'];
      })
      .catch(this.err);
  }

  //故障信息【已处理】按钮功能
  //同健康信息 故障已处理

  //获取当前未处理预警信息
  warningList(id: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/warning/notdeal/information';
    return this.httpClient.post(url,
      { id: id, sort_key: sort_key, sort_value: sort_value })
      .toPromise()
      .then(data => {
        //console.log("获取当前未处理预警信息", data);
        return data['data']['warningList'];
      })
      .catch(this.err);
  }

  //预警信息【已处理】按钮功能
  //同健康信息 预警已处理

  //****************首页************************* */
  //数据总览
  dataOverview() {
    const url: string = '/api/get/overview';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        return data['data']['dataOverview'];

      })
      .catch(this.err);
  }

  //故障明示
  faultOverview() {
    const url: string = '/api/get/fault/overview';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        return data['data']['faultOverview'];
      })
      .catch(this.err);
  }

  //故障分析
  FaultAnalysisList(date: number) {
    const url: string = '/api/get/fault/type/analysis';
    return this.httpClient.post(url, { date: date })
      .toPromise()
      .then(data => {
        //console.log("故障分析", data);
        return data['data']['FaultAnalysisList'];

      })
      .catch(this.err);
  }

  //趋势图
  tend(date: number) {
    const url: string = '/api/get/trend';
    return this.httpClient.post(url, { date: date })
      .toPromise()
      .then(data => {
        return data['data']['trend'];
      })
      .catch(this.err);
  }

  //案件分析
  CaseStudy(date: number) {
    const url: string = '/api/get/case/analysis';
    return this.httpClient.post(url, { date: date })
      .toPromise()
      .then(data => {
        return data['data']['CaseStudy'];
      })
      .catch(this.err);
  }

  //船只故障排名
  BoatsFaultRank(date: number) {
    const url: string = '/api/get/boat/fault/rank';
    return this.httpClient.post(url, { date: date })
      .toPromise()
      .then(data => {
        return data['data']['BoatsFaultRank'];
      })
      .catch(this.err);
  }
  //船只预警排名
  BoatsWarningRank(date: number) {
    const url: string = '/api/get/boat/warning/rank';
    return this.httpClient.post(url, { date: date })
      .toPromise()
      .then(data => {
        return data['data']['BoatsWarningRank'];

      })
      .catch(this.err);
  }

  //设备故障排名
  DevicesFaultRank(date: number) {
    const url: string = '/api/get/device/fault/rank';
    return this.httpClient.post(url, { date: date })
      .toPromise()
      .then(data => {
        return data['data']['DevicesFaultRank'];

      })
      .catch(this.err);
  }
  //设备预警排名
  DevicesWarningRank(date: number) {
    const url: string = '/api/get/device/warning/rank';
    return this.httpClient.post(url, { date: date })
      .toPromise()
      .then(data => {
        return data['data']['DevicesWarningRank'];

      })
      .catch(this.err);
  }
  //******************设备数据***************** */
  //查询设备数据
  rawDataList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/raw/data/';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value
    })
      .toPromise()
      .then(data => {
        return data['data']['rawDataList'];

      })
      .catch(this.err);
  }
  //*******************状态监测************************/
  //获取列表信息
  monitor_boatList() {
    const url: string = '/api/get/boat/list';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        return data['data']['boatList'];

      })
      .catch(this.err);
  }
  //设备今日状态
  current_status(id: number) {
    const url: string = '/api/get/device/today/status';
    return this.httpClient.post(url, { id: id })
      .toPromise()
      .then(data => {
        return data['data']['current_status'];

      })
      .catch(this.err);
  }
  //*******************设备管理************************/
  //查询船只信息
  boatList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/boat/information';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value
    })
      .toPromise()
      .then(data => {
        return data['data']['boatList'];
      })
      .catch(this.err);
  }
  //删除船只信息
  boat_delete(id: string) {
    const url: string = '/api/boat/delete/';
    return this.httpClient.post(url, { id: id })
      .toPromise()
      .then(data => {
      })
      .catch(this.err);
  }
  //添加船只
  addship(boat_code: string, boat_name: string) {
    const url: string = '/api/boat/add';
    return this.httpClient.post(url, { boat_code: boat_code, boat_name: boat_name })
      .toPromise()
      .then(data => {
        return data['status'];
      })
      .catch(this.err);
  }
  //编辑船只信息
  editship(id: string, boat_code: string, boat_name: string) {
    const url: string = '/api/boat/update';
    return this.httpClient.post(url, { id: id, boat_code: boat_code, boat_name: boat_name })
      .toPromise()
      .then(data => {
        return data['status'];
      })
      .catch(this.err);
  }

  //查询设备信息
  deviceList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/device/information';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value
    })
      .toPromise()
      .then(data => {
        return data['data']['deviceList'];

      })
      .catch(this.err);
  }
  //删除设备信息
  device_delete(id: string) {
    const url: string = '/api/device/delete';
    return this.httpClient.post(url, { id: id })
      .toPromise()
      .then(data => {
      })
      .catch(this.err);
  }
  //添加设备
  adddevice(device_code: string, device_name: string, boat_id: string) {
    const url: string = '/api/device/add';
    return this.httpClient.post(url, { device_code: device_code, device_name: device_name, boat_id: boat_id })
      .toPromise()
      .then(data => {
        return data['status'];
      })
      .catch(this.err);
  }
  //获取船只列表信息
  getboatList() {
    const url: string = '/api/get/device/boat/list';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        return data['data']['boatList'];
      })
      .catch(this.err);
  }
  //编辑设备信息
  editdevice(id: string, device_code: string, device_name: string, boat_id: string) {
    const url: string = '/api/device/update';
    return this.httpClient.post(url, { id: id, device_code: device_code, device_name: device_name, boat_id: boat_id })
      .toPromise()
      .then(data => {
        return data['status'];
      })
      .catch(this.err);
  }
  //*****************健康信息************************ */

  //故障信息
  faultRecordList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/fault/all/information';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value
    })
      .toPromise()
      .then(data => {
        return data['data']['faultRecordList'];
      })
      .catch(this.err);
  }
  //故障已处理
  faultmessage_deal(id: number) {
    const url: string = '/api/fault/deal/function';
    return this.httpClient.post(url, { id: id })
      .toPromise()
      .then(data => {
      })
      .catch(this.err);
  }
  //预警信息
  warningRecordList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/warning/all/information';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value
    })
      .toPromise()
      .then(data => {
        return data['data']['warningRecordList'];
      })
      .catch(this.err);
  }
  //预警已处理
  warnmessage_deal(id: number) {
    const url: string = '/api/warning/deal/function';
    return this.httpClient.post(url, { id: id })
      .toPromise()
      .then(data => {
      })
      .catch(this.err);
  }
  //故障类型统计
  faultTypeStatisticsList(find_key: string, find_vaule: string, sort_key: string, sort_value: string, date: number) {
    const url: string = '/api/get/fault/type/statistics/information/table';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value, date: date
    })
      .toPromise()
      .then(data => {
        return data['data']['faultTypeStatisticsList'];
      })
      .catch(this.err);
  }
  //船只故障统计
  statistics_boat_fault(find_key: string, find_vaule: string, sort_key: string, sort_value: string, date: number) {
    const url: string = '/api/get/fault/boat/statistics/information';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value, date: date
    })
      .toPromise()
      .then(data => {
        return data['data']['boatList'];
      })
      .catch(this.err);
  }
  //设备故障统计
  statistics_device_fault(find_key: string, find_vaule: string, sort_key: string, sort_value: string, date: number) {
    const url: string = '/api/get/fault/device/statistics/information/table';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value, date: date
    })
      .toPromise()
      .then(data => {

        return data['data']['deviceList'];
      })
      .catch(this.err);
  }
  //船只预警统计
  statistics_boat_warn(find_key: string, find_vaule: string, sort_key: string, sort_value: string, date: number) {
    const url: string = '/api/get/warning/boat/statistics/information';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value, date: date
    })
      .toPromise()
      .then(data => {
        return data['data']['boatList'];
      })
      .catch(this.err);
  }
  //设备预警统计
  statistics_device_warn(find_key: string, find_vaule: string, sort_key: string, sort_value: string, date: number) {
    const url: string = '/api/get/warning/device/statistics/information/table';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value, date: date
    })
      .toPromise()
      .then(data => {
        return data['data']['deviceList'];
      })
      .catch(this.err);
  }
  //**************************知识库管理***************************** */
  //查看运维知识库信息
  manualList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/manual/information';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value
    })
      .toPromise()
      .then(data => {
        return data['data']['manualList'];

      })
      .catch(this.err);
  }
  //获取故障模型库优化信息
  faultoOtimizationInformation(fault_id: string) {
    const url: string = '/api/get/fault/optimization/information';
    return this.httpClient.post(url, { fault_id: fault_id })
      .toPromise()
      .then(data => {
        return data['data']['faultoOtimizationInformation'];

      })
      .catch(this.err);
  }
  //确定优化按钮
  accept_optimization(data) {
    const url: string = '/api/agree/fault/optimization';
    return this.httpClient.post(url,
      { fault_id: data.id, fault_code: data.fault_code, fault_name: data.fault_name, reason: data.reason, feature: data.feature, method: data.method })
      .toPromise()
      .then(data => {
      })
      .catch(this.err);
  }
  //取消优化按钮
  refuse_optimization(id: number) {
    const url: string = '/api/not/agree/fault/optimization';
    return this.httpClient.post(url, { fault_id: id })
      .toPromise()
      .then(data => {
      })
      .catch(this.err);
  }

  //**************************系统日志***************************** */
  logList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/log/information';
    return this.httpClient.post(url, {
      find_key: find_key, find_vaule: find_vaule, sort_key: sort_key, sort_value: sort_value
    })
      .toPromise()
      .then(data => {
        return data['data']['LogList'];

      })
      .catch(this.err);
  }
  //**************************维护手册***************************** */
  //获取维护手册
  maintain_src() {
    const url: string = '/api/get/manual/url';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        return data['data']['url'];
      })
      .catch(this.err);
  }
  //维护手册下载
  maintain_download() {
    const url: string = '/api/get/manual/upload';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
      })
      .catch(this.err);
  }
}