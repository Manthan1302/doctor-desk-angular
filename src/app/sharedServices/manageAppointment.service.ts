import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PatientRegistration } from "../patient/PatientModel/PatientRegistartionModel";
import { Appointments } from "../sharedModel/Appointment";
import { map } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ManageAppointmentService {


    constructor(private http: HttpClient) { }

    appointmentsApi: string = 'http://localhost:3000/allAppointments'
    patientApi: string = 'http://localhost:3000/allPatient'



    getPatients() {

        return this.http.get<PatientRegistration[]>(this.patientApi)
    }

    actionAppointments(id: number | null, status: string) {
        let url = `${this.appointmentsApi}/${id}`
        console.log(url);


        return this.http.patch<Appointments[]>(url, { appointmentStatus: status })
    }


    getAppointmentDoctor() {
        return this.http.get<Appointments[]>(this.appointmentsApi)

    }

    deleteAppointmentDoctor(id: number | null) {
        const path: string = `http://localhost:3000/allAppointments/${id}`
        return this.http.delete(path)
    }

    deletePatientDoctor(id: number | null) {
        const path: string = `http://localhost:3000/allPatient/${id}`
        return this.http.delete(path)
    }

}