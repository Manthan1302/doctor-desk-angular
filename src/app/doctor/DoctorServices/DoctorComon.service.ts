import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DoctorRegistration } from "../doctorModel/DoctorRegistrationModel";
import { MedicineApi } from "../doctorModel/Priscriptiondatamodel";

@Injectable({
    providedIn:'root'
})
export class DoctorComonService{

    constructor(private http: HttpClient) {}

    Doctordataapi = 'http://localhost:3000/allDoctors';
    medicineApi = 'http://localhost:3000/medicines';
    updateId!:number

    dataUpdate!:DoctorRegistration
     

    getMedicines(){
        return this.http.get<MedicineApi[]>(this.medicineApi)
    }
    getDoctorData(){
        return this.http.get(this.Doctordataapi)
    }

    getSessionStorage(){
        let dataDoctor=sessionStorage.getItem('LogedDoctor')
        if(dataDoctor){
            let did=JSON.parse(dataDoctor)
            return did.id
        }
    }

    getAuthKey(){
        return sessionStorage.getItem('AuthKeyDoctor')
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