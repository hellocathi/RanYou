import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-home-manage',
  templateUrl: './home-manage.component.html',
  styles: []
})
export class HomeManageComponent implements OnInit {
  public data: Array<any>;
  constructor(private httpClient: HttpClient, private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.dataOverview().then(data => {
      this.data = data;
    });
  }

}
