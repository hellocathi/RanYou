import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'ship-warn-tab',
    template: ``,
    styles: []
})
export class ShipWarnTabComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
        this.router.navigate(['statistics-message/ship-warn'], { queryParams: { tab: 'two' } });
    }

}