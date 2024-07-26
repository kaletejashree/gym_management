import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { AddtrainerComponent } from './addtrainer/addtrainer.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  // Layout routes
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'addmember', component: AddmemberComponent },
      { path: 'addmember', component: AddmemberComponent },
      { path: 'addtrainer', component: AddtrainerComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'payment', component: PaymentFormComponent },
      // Optionally add a default child route if needed
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
