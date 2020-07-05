import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditService } from '../../service/edit.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'deit-device',
  template: `
  <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
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
  </form>
  <div class="modal-footer">
    <button nz-button [nzType]="'default'" (click)="cancel()">
      取消
    </button>
    <button nz-button [nzType]="'primary'" (click)="ok()" [disabled]="!validateForm.valid ">
      确定
    </button>
  </div>
  `,
  styles: []
})
export class EditDeviceComponent implements OnInit {
  validateForm: FormGroup;
  public id;
  public device_code;
  public device_name;
  public boat_id;
  public return_status;

  getData(id: string, device_code: string, device_name: string, boat_id: string) {
    this.apiService.editdevice(id, device_code, device_name, boat_id).then(data => {
      this.return_status = data;
    });
  }
  constructor(public router: Router, private message: NzMessageService,
    private fb: FormBuilder, private modal: NzModalRef,
    private editService: EditService, private apiService: ApiService) { }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  ok() {
    this.device_code = this.validateForm.controls['device_code'].value;
    this.device_name = this.validateForm.controls['device_name'].value;
    this.id = this.editService.edit_device.id;
    this.boat_id = this.editService.edit_device.boat_id;

    //调用编辑api（id在service中）
    this.getData(this.id, this.device_code, this.device_name, this.boat_id);
    //如果添加成功
    if (this.return_status = "ok") {
      this.modal.close(this.validateForm.value);
      this.cancel();
      this.message.success(`修改成功`);
      this.router.navigate(['device-manage/device-manage-control']);
    } else {
      this.message.error(`设备代码或者设备名称已存在，请重新修改`);
    }
  }

  cancel() {
    this.modal.destroy();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      device_code: [this.editService.edit_device.device_code, [Validators.required]],
      device_name: [this.editService.edit_device.device_name, [Validators.required]],

    });
  }

}
