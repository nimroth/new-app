import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [ EmployeeListComponent ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class EmployeeListModule { }
