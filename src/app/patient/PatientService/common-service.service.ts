import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorRegisterService } from 'src/app/doctor/DoctorServices/DoctorRegister.service';
import { DoctorRegistration } from 'src/app/doctor/doctorModel/DoctorRegistrationModel';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';
import { Appointments } from 'src/app/sharedModel/Appointment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  loggedPatient!: PatientRegistration;
  id: number | null = null;
  constructor(private httpClient: HttpClient, private router: Router) { }


  bookingData: DoctorRegistration | null = null;
  url: string = "http://localhost:3000"
  


  getAllDoctors() {
    const path = this.url + '/allDoctors';
    return this.httpClient.get<DoctorRegistration[]>(path)
  }

  updatePatientProfile(data: any) {
    const patient = sessionStorage.getItem('loggedPatient')
    if (patient) {
      let patients = JSON.parse(patient)
      this.loggedPatient = data
      this.loggedPatient.PatientGender = patients.PatientGender;
      this.id = patients.id
    }
    const path = `${this.url}/allPatient/${this.id}`;
    return this.httpClient.put(path, this.loggedPatient)


  }

  getBookingData(){
    return this.bookingData;
  }


  getSessionAuthKey(){
    return sessionStorage.getItem('AuthKeyPatient')
  }

  getPatientAppointment(){
    const path=`${this.url}/allAppointments`
    return this.httpClient.get<Appointments[]>(path)
  }

}
