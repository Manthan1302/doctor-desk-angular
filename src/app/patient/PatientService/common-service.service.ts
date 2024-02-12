import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorRegisterService } from 'src/app/doctor/DoctorServices/DoctorRegister.service';
import { DoctorRegistration } from 'src/app/doctor/doctorModel/DoctorRegistrationModel';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {


  constructor(private httpClient: HttpClient, private router: Router) { }
  getPatient: string = "http://localhost:3000/allDoctors"
  
  getAllDoctors(){
    return this.httpClient.get<DoctorRegistration[]>(this.getPatient)
  }
}
