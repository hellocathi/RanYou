import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'device-table2',
  templateUrl: './table2.html',
  styles: [
  ]
})
export class DeviceTable2Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goDetails() {
    this.router.navigate(['device-data']);
  }
}