import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styles: []
})
export class MaintainComponent implements OnInit {
  public pdfSrc: string;
  public err;
  constructor(private apiSerice: ApiService) {

  }

  ngOnInit() {
    //api,返回链接赋给pdfSrc
    //this.getData();
    this.pdfSrc = "../../../../../assets/production-maintain.pdf";
  }
  getData() {
    this.apiSerice.maintain_src().then(data => {
      this.pdfSrc = data;
    });
  }
  download() {
    this.apiSerice.maintain_download();
  }

}
