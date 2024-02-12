import { NgForm } from "@angular/forms";
import { DoctorRegistration } from "../doctorModel/DoctorRegistrationModel";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class DoctorRegisterService{

    constructor(private http: HttpClient) {}

    RegistrationApi:string='http://localhost:3000/allDoctors'

    docotrsArray:DoctorRegistration[]=[]


    // doctor Register Api
    RegisterDoctor(RegisterDetails:NgForm){
        this.docotrsArray.push(RegisterDetails.value)
        return this.http.post(this.RegistrationApi,this.docotrsArray)
    }


    getDoctor(){
        return this.http.get(this.RegistrationApi)
    }

    




}