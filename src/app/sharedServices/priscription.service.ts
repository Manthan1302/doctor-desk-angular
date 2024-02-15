import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Priscriptionmodel } from "../doctor/doctorModel/Priscriptiondatamodel";

@Injectable({
    providedIn:'root'
})
export class Priscriptionservice{

    priscriptionurl:string = "http://localhost:3000/allpriscriptiondata"
    constructor(private http:HttpClient){}


    createPriscription(data:Priscriptionmodel,patientId:number,doctorId:number,appointmentdate:string,appointmenttime:string){
        data.doctorId = doctorId;
        data.patientId = patientId;
        data.appointmentdate = appointmentdate;
        data.appointmenttime = appointmenttime;
        return this.http.post(this.priscriptionurl,data)
    }

    getPriscription(){
        return this.http.get<Priscriptionmodel[]>(this.priscriptionurl)
    }

}