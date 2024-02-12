import { Injectable } from "@angular/core";
import { Appointments } from "../sharedModel/Appointment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class BookAppointmentService{

    constructor(private http:HttpClient){}
    apoointmentsApi:string="http://localhost:3000/allAppointments"

    appointmentArray:Appointments=
        {doctorId:101,patientId:202,appointmentDate:"12-05-2020",appointmentTime:"9-12",appointmentStatus:"Pending",doctoeName:"Arjun",patientName:"Jeel"}
    


    bookAddAppointment(){
        this.http.post(this.apoointmentsApi,this.appointmentArray).subscribe(result=>{
            console.log(result);
            
        })

    }
}