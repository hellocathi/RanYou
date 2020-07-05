import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
@Component({
    selector: 'introduction-edit',
    template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
        <nz-form-item>
            <nz-form-control [nzSm]="20" [nzXs]="30" style="margin-left:40px">
                <textarea rows="2" nz-input id="introduction" formControlName="introduction"></textarea>
            </nz-form-control>
        </nz-form-item>
    </form>
  
  `,
    styles: []
})
export class IntroductionEditComponent implements OnInit {

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



    constructor(private fb: FormBuilder, @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) { }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            //改为get().introduction
            introduction: [this.tokenService.get().time, [Validators.required]],

        });
    }
}
