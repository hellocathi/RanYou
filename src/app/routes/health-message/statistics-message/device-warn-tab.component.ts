import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'device-warn-tab',
    template: ``,
    styles: []
})
export class DeviceWarnTabComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
        this.router.navigate(['statistics-message/device-warn'], { queryParams: { tab: 'two' } });
    }

}