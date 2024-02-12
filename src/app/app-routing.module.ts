
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { AppComponent } from './app.component';
import { AskingPageComponent } from './asking-page/asking-page.component';
import { RegistrationComponent } from './doctor/registration/registration.component';
import { LoginComponent } from './doctor/login/login.component';
import { DashbordComponent } from './doctor/dashbord/dashbord.component';
import { DoctorViewapointmentComponent } from './doctor/doctor-viewapointment/doctor-viewapointment.component';
import { PatientLoginComponent } from './patient/patient-login/patient-login.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';

const routes: Routes = [
  { path: "", component: AskingPageComponent },
  // doctor  routes
  { path: "doctorregistration", component: RegistrationComponent },
  { path: "doctorlogin", component: LoginComponent },
  {
    path: "doctordashbord", component: DashbordComponent,
    children: [
      { path: "home", component: DoctorViewapointmentComponent }
    ]
  },
  // patient routes
  { path: "patientRegistration", component: PatientRegistrationComponent },
  { path: "patientLogin", component: PatientLoginComponent },
  { path: "patientDashboard", component: PatientDashboardComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
