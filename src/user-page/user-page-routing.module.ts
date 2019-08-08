import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      { path: 'user-dashboard', loadChildren: 'src/user-dashboard/user-dashboard.module#UserDashboardModule' },
      { path: 'salary', loadChildren: 'src/salary/salary.module#SalaryModule' },
      { path: 'leave', loadChildren: 'src/leave/leave.module#LeaveModule' },
      { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
