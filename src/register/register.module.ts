import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatSelectModule,
         MatOptionModule,
         MatToolbarModule,
         MatCardModule,
         MatCheckboxModule,
         MatChipsModule,
         MatAutocompleteModule,
         MatIconModule
        } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ]
})
export class RegisterModule { }
