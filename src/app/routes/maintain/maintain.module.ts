import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MaintainRoutingModule } from './maintain-routing.module';
import { MaintainComponent } from './maintain/maintain.component';
import { PdfViewerModule } from 'ng2-pdf-viewer'
const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    MaintainRoutingModule,
    PdfViewerModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    MaintainComponent,

  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class MaintainModule { }
