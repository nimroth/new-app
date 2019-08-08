import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';

@NgModule({
  declarations: [ UserDashboardComponent ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MatCardModule
  ]
})
export class UserDashboardModule { }
