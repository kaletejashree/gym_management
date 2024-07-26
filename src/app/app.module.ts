import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { AddtrainerComponent } from './addtrainer/addtrainer.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddmemberComponent,
    AddtrainerComponent,
    AttendanceComponent,
    DashboardComponent,
    LayoutComponent,
    LoginComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
