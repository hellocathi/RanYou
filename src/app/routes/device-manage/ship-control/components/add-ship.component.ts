import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service'
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
@Component({
    selector: 'add-ship',
    template: `

        <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
        <nz-form-item>
            <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="boat_code" nzRequired>船只代码</nz-form-label>
            <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="不能为空">
                <input nz-input type="text" id="boat_code" formControlName="boat_code"  />
            </nz-form-control>
        </nz-form-item>
        <nz-form-item> 
            <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="boat_name" nzRequired>船只名称</nz-form-label>
            <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="不能为空">
                <input nz-input type="text" id="boat_name" formControlName="boat_name" />
            </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row class="register-area">
            <nz-form-control [nzSpan]="14" [nzOffset]="6">
            <button nz-button [nzType]="'primary'" (click)="submit()" [disabled]="!validateForm.valid ">
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

    `]
})
export class AddShipComponent implements OnInit {
    validateForm: FormGroup;
    public getboat_code;
    public getboat_name;
    public return_status;

    getData(boat_code: string, boat_name: string) {
        this.apiService.addship(boat_code, boat_name).then(data => {
            this.return_status = data;
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
        this.getboat_code = this.validateForm.controls['boat_code'].value;
        this.getboat_name = this.validateForm.controls['boat_name'].value;

        this.getData(this.getboat_code, this.getboat_name);
        if (this.return_status = "ok") {
            this.modal.close(this.validateForm.value);
            this.cancel();
            this.message.success(`添加船只成功`);
            this.router.navigate(['device-manage/ship-manage-control']);
        } else {
            this.message.error(`船只代码或者船只名称已存在，请重新添加`);
        }


    }

    cancel() {
        this.modal.destroy();
    }
    constructor(private fb: FormBuilder, private apiService: ApiService,
        public router: Router, private message: NzMessageService, private modal: NzModalRef) { }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            boat_code: [null, [Validators.required]],
            boat_name: [null, [Validators.required]],

        });
    }
}