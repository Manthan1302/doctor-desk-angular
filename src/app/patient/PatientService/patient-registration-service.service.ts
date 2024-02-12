import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';

@Injectable({
  providedIn: 'root'
})
export class PatientRegistrationServiceService {

  constructor(private httpClient:HttpClient) { }

  patientRegistrationApi:string = "http://localhost:3000/allPatient"

  RegisterPatient(data:PatientRegistration){
    return this.httpClient.post(this.patientRegistrationApi,data)
  }
}
