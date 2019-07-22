import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
         MatSidenavModule,
         MatDividerModule,
         MatListModule,
        } from '@angular/material';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';

@NgModule({
  declarations: [ UserPageComponent ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class UserPageModule { }
