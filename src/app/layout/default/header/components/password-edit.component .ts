import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'password-edit',
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
        <nz-form-item>
          <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="oldpassword" nzRequired>旧密码</nz-form-label>
          <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="请输入6-15位旧密码">
              <input nz-input type="password" id="oldpassword" formControlName="oldpassword"
                  minlength="6" maxlength="15" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
            <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="password" nzRequired>新密码</nz-form-label>
            <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="请输入6-15新位密码">
                <input nz-input type="password" id="password" formControlName="password"
                    (ngModelChange)="updateConfirmValidator()" minlength="6" maxlength="15" />
            </nz-form-control>
        </nz-form-item>
        <nz-form-item>
            <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="checkPassword" nzRequired>确认密码</nz-form-label>
            <nz-form-control [nzSm]="14" [nzXs]="24" [nzErrorTip]="errorTpl">
                <input nz-input type="password" formControlName="checkPassword" id="checkPassword" />
                <ng-template #errorTpl let-control>
                    <ng-container *ngIf="control.hasError('required')">
                        请确认你的密码
                    </ng-container>
                    <ng-container *ngIf="control.hasError('confirm')">
                        两次密码不一致！
                    </ng-container>
                </ng-template>
            </nz-form-control>
        </nz-form-item>
    </form>
  
  `,
  styles: []
})
export class PasswordEditComponent implements OnInit {

  validateForm: FormGroup;


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
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      oldpassword: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],

    });
  }
}
