import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { ApiService } from 'src/app/services/api.service'
@Component({
    selector: 'cascader',
    template: `
    <nz-cascader 
      [nzShowSearch]="true"
      [nzPlaceHolder]="'请选择或者输入设备'"
      [nzChangeOn]="validate"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    >
    </nz-cascader>
  `,
    styles: [
        `
        nz-cascader{
            margin-top: 20px;
            margin-bottom: 20px;
            
        }
      .ant-cascader-picker {
        width: 300px;
      }
    `
    ]
})
export class CascaderComponent implements OnInit {

    @Output() outer = new EventEmitter();
    public nzOptions: NzCascaderOption[];
    public values: string[] | null;
    constructor(private apiService: ApiService) { }



    ngOnInit() {
        this.nzOptions = [
            {
                "value": "1",
                "label": "远航号",
                "children": [
                    {
                        "value": "1",
                        "label": "远航01燃油设备",
                        "isLeaf": true
                    },
                    {
                        "value": "2",
                        "label": "远航02燃油设备",
                        "isLeaf": true
                    },
                ]
            },
            {
                "value": "2",
                "label": "神舟号",
                "children": [
                    {
                        "value": "3",
                        "label": "神舟01燃油设备",
                        "isLeaf": true
                    },
                    {
                        "value": "4",
                        "label": "神舟02燃油设备",
                        "isLeaf": true
                    },
                ],
            }
        ];

        this.getData();
        this.values = null;
    }
    getData() {
        this.apiService.monitor_boatList().then(data => {
            this.nzOptions = data;
        });
    }
    onChanges(values: string[]): void {
        this.outer.emit(values[2]);
    }

}