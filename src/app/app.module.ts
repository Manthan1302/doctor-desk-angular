import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AskingPageComponent } from './asking-page/asking-page.component';
import { RegistrationComponent } from './doctor/registration/registration.component';
import { LoginComponent } from './doctor/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    AskingPageComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
