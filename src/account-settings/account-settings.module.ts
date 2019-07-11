import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings.component';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatOptionModule,
         MatFormFieldModule,
         MatSelectModule,
         MatButtonModule,
         MatCardModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule
        } from '@angular/material';

@NgModule({
  declarations: [ AccountSettingsComponent ],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class AccountSettingsModule { }
