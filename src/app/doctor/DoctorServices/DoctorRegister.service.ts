import { NgForm } from "@angular/forms";
import { DoctorRegistration } from "../doctorModel/DoctorRegistrationModel";
import { HttpClient } from "@angular/common/http";

export class DoctorRegisterService{

    constructor(private http: HttpClient) {}
    RegistrationApi:string=''

    docotrsArray:DoctorRegistration[]=[]


    RegisterDoctor(RegisterDetails:NgForm){
        return this.http.post(this.RegistrationApi,RegisterDetails)
    }



}