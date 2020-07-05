import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service'
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
@Component({
    selector: 'add-device',
    template: `

        <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
        <nz-form-item>
            <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="boat_id" nzRequired>船只名称</nz-form-label>
            <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="不能为空" [nzValidateStatus]="validateForm.controls['boat_id']">
                <nz-select formControlName="boat_id" nzPlaceHolder="请选择要添加设备的船只" >
                    <nz-option *ngFor="let o of listOfOption" [nzLabel]="o.boat_name" [nzValue]="o.id"> </nz-option>
                </nz-select>
            </nz-form-control>
        </nz-form-item>
        <nz-form-item>
            <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="device_code" nzRequired>设备代码</nz-form-label>
            <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="不能为空">
                <input nz-input type="text" id="device_code" formControlName="device_code" />
            </nz-form-control>
        </nz-form-item>
        <nz-form-item> 
            <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="device_name" nzRequired>设备名称</nz-form-label>
            <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="不能为空">
                <input nz-input type="text" id="device_name" formControlName="device_name" />
            </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row class="register-area">
            <nz-form-control [nzSpan]="14" [nzOffset]="6">
            <button nz-button [nzType]="'primary'" (click)="submit()" [disabled]="!validateForm.valid">
                确定
            </button>
            <button nz-button (click)="resetForm($event)">重置</button>
            <button nz-button (click)="cancel()">取消</button>
            </nz-form-control>
        </nz-form-item>
        </form>
  `,

    styles: [`
    [nz-form] {
        max-width: 600px;
    }
    .register-are {
        margin-bottom: 8px;
    }
    nz-tabset{
        margin:0px 10px;
    }
    `]
})
export class AddDeviceComponent implements OnInit {
    validateForm: FormGroup;
    public listOfOption;
    public getdevice_code;
    public getdevice_name;
    public getboat_id;
    public err;
    public return_status;

    get_adddevice_Data(device_code: string, device_name: string, boat_id: string) {
        this.apiService.adddevice(device_code, device_name, boat_id).then(data => {
            this.return_status = data;
        });
    }
    get_boatList_Data() {
        this.apiService.getboatList().then(data => {
            this.listOfOption = data;
        });
    }

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    resetForm(e: MouseEvent): void {
        e.preventDefault();
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }


    submit() {//获取表单内容
        this.getdevice_code = this.validateForm.controls['device_code'].value;
        this.getdevice_name = this.validateForm.controls['device_name'].value;
        this.getboat_id = this.validateForm.controls['boat_id'].value;

        this.get_adddevice_Data(this.getdevice_code, this.getdevice_name, this.getboat_id);
        if (this.return_status = "ok") {
            this.modal.close(this.validateForm.value);
            this.cancel();
            this.message.success(`添加设备成功`);
            this.router.navigate(['device-manage/device-manage-control']);
        } else {
            this.message.error(`设备代码或者设备名称已存在，请重新添加`);
        }


    }

    cancel() {
        this.modal.destroy();
    }
    constructor(private fb: FormBuilder, private apiService: ApiService,
        public router: Router, private message: NzMessageService, private modal: NzModalRef) { }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            device_code: [null, [Validators.required]],
            device_name: [null, [Validators.required]],
            boat_id: [null, [Validators.required]],
        });
        this.listOfOption = [
            {
                "id": "1",
                "boat_code": "rycz_20200529_01",
                "boat_name": "远航号",
            },
            {
                "id": "2",
                "boat_code": "rycz_20200529_02",
                "boat_name": "神州号",
            }
        ];
        this.get_boatList_Data();
    }
}