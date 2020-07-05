import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
    selector: 'add-fault',
    templateUrl: './add-fault.component.html',
    styles: []
})
export class AddFaultComponent implements OnInit {
    editCache: { [key: string]: { edit: boolean; data: [] } } = {};
    public listOfData: Array<any>;
    ngOnInit(): void {
        this.listOfData = [
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通",
                "algorithm": "故障算法模型",
                "reason": "供油管路未通",
                "feature": "P1不在正常工作范围内",
                "method": "检查油仓到燃油供应单元间阀门状态",
                "count_month": "3"
            },
            {
                "id": "2",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞",
                "algorithm": "故障算法模型",
                "reason": "滤芯堵塞",
                "feature": "P3-P1超出设定值",
                "method": "切换备用粗滤器，清洗滤芯",
                "count_month": "4"
            },
        ];
        this.get_subscribe_id();
    }
    get_subscribe_id() {
        //从apiService中获取消息队列里面的id字符串
        const id = "1,2";
        this.getData(id);
    }
    getData(fault_id: string) {
        this.apiService.faultoOtimizationInformation(fault_id).then(data => {
            this.listOfData = data;
            this.updateEditCache();
        });
    }
    startEdit(id: string): void {
        this.editCache[id].edit = true;
    }

    cancelEdit(id: string): void {
        const index = this.listOfData.findIndex(item => item.id === id);
        this.editCache[id] = {
            data: { ...this.listOfData[index] },
            edit: false
        };

    }

    saveEdit(id: string): void {
        const index = this.listOfData.findIndex(item => item.id === id);
        Object.assign(this.listOfData[index], this.editCache[id].data);
        this.editCache[id].edit = false;
    }

    updateEditCache(): void {
        this.listOfData.forEach(item => {
            this.editCache[item.id] = {
                edit: false,
                data: { ...item }
            };
        });
    }
    accept(data) {
        this.apiService.accept_optimization(data);
        this.get_subscribe_id();
    }


    refuse(id: number) {
        this.apiService.refuse_optimization(id);
        this.get_subscribe_id();
    }

    constructor(private apiService: ApiService) {

    }
}