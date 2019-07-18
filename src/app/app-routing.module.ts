import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/landing/landing.module#LandingModule'
  },
  {
    path: 'register',
    loadChildren: 'src/register/register.module#RegisterModule'
  },
  {
    path: 'login',
    loadChildren: 'src/login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'src/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'employee-list',
    loadChildren: 'src/employee-list/employee-list.module#EmployeeListModule'
  },
  {
    path: 'employee-graph',
    loadChildren: 'src/employee-graph/employee-graph.module#EmployeeGraphModule'
  },
  {
    path: 'account-settings',
    loadChildren: 'src/account-settings/account-settings.module#AccountSettingsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
