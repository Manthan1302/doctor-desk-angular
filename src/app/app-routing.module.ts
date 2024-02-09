import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { AppComponent } from './app.component';
import { AskingPageComponent } from './asking-page/asking-page.component';
import { RegistrationComponent } from './doctor/registration/registration.component';
import { LoginComponent } from './doctor/login/login.component';

const routes: Routes = [
  {path:"",component:AskingPageComponent},
  {path:"doctorregistration",component:RegistrationComponent},
  {path:"doctorlogin",component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
