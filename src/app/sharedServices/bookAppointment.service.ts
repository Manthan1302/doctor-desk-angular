import { Injectable } from "@angular/core";
import { Appointments } from "../sharedModel/Appointment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class BookAppointmentService{

    constructor(private http:HttpClient){}
    apoointmentsApi:string="http://localhost:3000/allAppointments"

    bookAddAppointment(appointment:Appointments){

        this.http.post(this.apoointmentsApi,appointment).subscribe(result=>{
            console.log(result);
            
        })

    }
}