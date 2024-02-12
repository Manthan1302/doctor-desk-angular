import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DoctorRegistration } from "../doctorModel/DoctorRegistrationModel";

@Injectable({
    providedIn:'root'
})
export class DoctorComonService{

    constructor(private http: HttpClient) {}

    Doctordataapi = 'http://localhost:3000/allDoctors';
    updateId!:number

    dataUpdate!:DoctorRegistration
     

    getDoctorData(){
        return this.http.get(this.Doctordataapi)
    }


    updateDoctor(data:any){
        console.log(data);
        
    let id=sessionStorage.getItem('LogedDoctor');
    if(id){
        let iddoctor=JSON.parse(id)
        console.log(iddoctor);
        
        this.updateId=iddoctor.id
        this.dataUpdate=data
        this.dataUpdate.doctorGender=iddoctor.doctorGender
        this.dataUpdate.doctorRegisterPassword=iddoctor.doctorRegisterPassword
        this.dataUpdate.doctorRegisterConfirmPassword=iddoctor.doctorRegisterConfirmPassword
        this.dataUpdate.doctorSpecialization=iddoctor.doctorSpecialization
        this.dataUpdate.doctorRegistrationNumber=iddoctor.doctorRegistrationNumber
        console.log(this.dataUpdate);
        
        console.log(iddoctor.id);   
    }
    let updateIdData=`${this.Doctordataapi}/${this.updateId}`
    console.log(updateIdData);
    
        return this.http.put(updateIdData,this.dataUpdate)
    }
}