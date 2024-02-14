import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Appointments } from 'src/app/sharedModel/Appointment';

@Injectable({
    providedIn: 'root'
})
export class GetAppointments {

    constructor(private http: HttpClient) { }

    appointmentsApi: string = 'http://localhost:3000/allAppointments'


    getMyAppointments(){
       return this.http.get<Appointments[]>(this.appointmentsApi)
    }

}