import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { MatSidenavModule,
         MatDividerModule,
         MatListModule,
         MatToolbarModule
        } from '@angular/material';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
