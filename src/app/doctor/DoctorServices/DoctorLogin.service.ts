import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DoctorRegistration } from "../doctorModel/DoctorRegistrationModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export  class DoctorLoginService{

    constructor(private http: HttpClient) {}

    RegistrationApi='http://localhost:3000/allDoctors'

    checkLoginArray:DoctorRegistration[]=[]

    userMatch:boolean=false

    LoginDoctor(){
        let doctorContactLogin=7301949431
        let password="0000"
        console.log("hello");
        
        this.http.get<DoctorRegistration []>(this.RegistrationApi).subscribe(e=>{
        
            // console.log(e.forEach);
            e.forEach(e1=>{
                if(e1.doctorPhoneNumber===doctorContactLogin && e1.doctorRegisterPassword===password){
                    this.userMatch=true
                    return 
                    
                }else{
                    this.userMatch=false
                }
            })
            
        })

        if(this.userMatch){
            console.log(this.userMatch);
            alert("user match")
        }else{
            console.log(this.userMatch);

            // alert("invalid user")

        }
        // .subscribe((e)=>{
        // // return e
        //     console.log(e);
        
            
        // })
        // console.log("dsds",this.checkLoginArray);

        
        // this.docotrsArray.push(RegisterDetails.value)
        // return this.http.post(this.RegistrationApi,this.docotrsArray)
    }

}