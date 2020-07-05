import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'add-user',
  templateUrl: 'add-user.html',

  styles: []
})
export class AddUserComponent implements OnInit {
  validateForm: FormGroup;
  public getusername;
  public getpassword;
  public getphoneNumber;
  public getintroduction;
  public username;
  public testUsername = true;


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
  submit() {//获取表单内容
    this.getusername = this.validateForm.controls['username'].value;
    this.getpassword = this.validateForm.controls['password'].value;
    this.getphoneNumber = this.validateForm.controls['phoneNumber'].value;
    this.getintroduction = this.validateForm.controls['introduction'].value;
    console.log(this.getusername, this.getpassword, this.getphoneNumber, this.getintroduction);

    //去后端验证用户名是否已存在
    this.testUsername = false;
    if (this.testUsername) {
      const modal = this.modalService.success({
        nzTitle: '添加用户成功！',
      });

      setTimeout(() => modal.destroy(), 2500);
      this.router.navigate(['user']);
    } else {
      this.message.error('此用户名已存在', { nzDuration: 2000 });
      this.username = "";
    }
  }

  match = (control: FormControl): { [key: string]: boolean } => {
    const tell = control.value;
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(tell))) {
      return { nomatch: true };
    } else {
      return null;//这里一定是null
    }
  };

  constructor(private fb: FormBuilder, private modalService: NzModalService, public router: Router, private message: NzMessageService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      phoneNumber: [null, [Validators.compose([Validators.required, this.match])]],
      introduction: [null, [Validators.required]],

    });
  }
}