import { Injectable } from "@angular/core";
import { Appointments } from "../sharedModel/Appointment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class BookAppointmentService{

    constructor(private http:HttpClient){}
    apoointmentsApi:string="http://localhost:3000/allAppointments"

    // appointmentArray:Appointments=
    //     {doctorId:101,patientId:202,appointmentDate:"12-05-2020",appointmentTime:"9-12",
    //     appointmentStatus:"Pending",appointmentDescription:"dsfds"}
    


    bookAddAppointment(appointment:Appointments){
        // appointment.doctorId=

        this.http.post(this.apoointmentsApi,appointment).subscribe(result=>{
            console.log(result);
            
        })

    }
}