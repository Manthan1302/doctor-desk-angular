import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class DoctorComonService{

    constructor(private http: HttpClient) {}

    Doctordataapi = 'http://localhost:3000/allDoctors';

    getDoctorData(){
        return this.http.get(this.Doctordataapi)
    }


}