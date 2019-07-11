import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'employee-list',
        loadChildren: 'src/employee-list/employee-list.module#EmployeeListModule'
      },
      {
        path: 'employee-graph',
        loadChildren: 'src/employee-graph/employee-graph.module#EmployeeGraphModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
