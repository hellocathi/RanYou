import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditService } from '../../service/edit.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'deit-ship',
  template: `
  <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
        <nz-form-item>
          <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="boat_code" nzRequired>船只代码</nz-form-label>
          <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="不能为空">
              <input nz-input type="text" id="boat_code" formControlName="boat_code"/>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item> 
            <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="boat_name" nzRequired>船只名称</nz-form-label>
            <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="不能为空">
                <input nz-input type="text" id="boat_name" formControlName="boat_name" />
            </nz-form-control>
        </nz-form-item>
    </form>
  <div class="modal-footer">
    <button nz-button [nzType]="'default'" (click)="cancel()">
      取消
    </button>
    <button nz-button [nzType]="'primary'" (click)="ok()" [disabled]="!validateForm.valid">
      确定
    </button>
  </div>
  `,
  styles: []
})
export class EditShipComponent implements OnInit {
  validateForm: FormGroup;
  public boat_code;
  public boat_name;
  public return_status;

  getData(id: string, boat_code: string, boat_name: string) {
    this.apiService.editship(id, boat_code, boat_name).then(data => {
      this.return_status = data;
    });
  }
  constructor(public router: Router, private message: NzMessageService,
    private fb: FormBuilder, private modal: NzModalRef,
    private editService: EditService, private apiService: ApiService, ) { }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  ok() {
    this.boat_code = this.validateForm.controls['boat_code'].value;
    this.boat_name = this.validateForm.controls['boat_name'].value;

    //调用编辑api（id在service中）
    this.getData(this.editService.edit_ship.id, this.boat_code, this.boat_name);
    //如果添加成功
    if (this.return_status = "ok") {
      this.modal.close(this.validateForm.value);
      this.cancel();
      this.message.success(`修改成功`);
      this.router.navigate(['device-manage/ship-manage-control']);
    } else {
      this.message.error(`船只代码或者船只名称已存在，请重新修改`);
    }

  }

  cancel() {
    this.modal.destroy();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      boat_code: [this.editService.edit_ship.boat_code, [Validators.required]],
      boat_name: [this.editService.edit_ship.boat_name, [Validators.required]],


    });
  }

}
