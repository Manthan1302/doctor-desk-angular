import { NgForm } from "@angular/forms";
import { DoctorRegistration } from "../doctorModel/DoctorRegistrationModel";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class DoctorRegisterService{

    RegistrationApi:string='http://localhost:3000/allDoctors'
    constructor(private http: HttpClient) {
       
    }
    
    
    docotrsArray:DoctorRegistration[]=[]
    length:number=0
    
    
    
    
    // doctor Register Api
    RegisterDoctor(RegisterDetails:DoctorRegistration){
        // this.http.get<DoctorRegistration[]>(this.RegistrationApi).subscribe(res=>{
        //     console.log(res.length);
        //     this.length=res.length
        //     console.log(this.length);
            
            
        // })
        // RegisterDetails.doctorId=this.length+1
    
        // this.docotrsArray.push(RegisterDetails)
        // console.log(this.length);
        // RegisterDetails.doctorId=
        return this.http.post(this.RegistrationApi,RegisterDetails)
    }


    getDoctor(){
        return this.http.get(this.RegistrationApi)
    }






}