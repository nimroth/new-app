import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeGraphComponent } from './employee-graph.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EmployeeGraphRoutingModule } from './employee-graph-routing.module';

@NgModule({
  declarations: [ EmployeeGraphComponent ],
  imports: [
    CommonModule,
    EmployeeGraphRoutingModule,
    FlexLayoutModule
  ]
})
export class EmployeeGraphModule { }
