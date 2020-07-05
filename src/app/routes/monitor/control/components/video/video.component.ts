import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styles: []
})
export class VideoComponent implements OnInit {
    public a;
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        this.a = true;
    }

}