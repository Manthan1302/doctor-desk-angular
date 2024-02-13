import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PatientRegistration } from "../patient/PatientModel/PatientRegistartionModel";

@Injectable({
    providedIn:'root'
})
export class ManageAppointmentService{


    constructor(private http:HttpClient){}

    appointmentsApi:string='http://localhost:3000/allAppointments'
    patientApi:string='http://localhost:3000/allPatient'


    getPatients(){
        return this.http.get<PatientRegistration[]>(this.patientApi)
    }
}