import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeGraphComponent } from './employee-graph.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeGraphRoutingModule { }
