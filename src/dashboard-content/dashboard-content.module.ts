import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardContentRoutingModule } from './dashboard-content-routing.module';
import { DashboardContentComponent } from './dashboard-content.component';

@NgModule({
  declarations: [ DashboardContentComponent ],
  imports: [
    CommonModule,
    DashboardContentRoutingModule
  ]
})
export class DashboardContentModule { }
