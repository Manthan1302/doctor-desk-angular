import { Component } from '@angular/core';
import { DoctorLoginService } from '../DoctorServices/DoctorLogin.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  constructor(private service:DoctorLoginService){}
  
  logOut(){
    this.service.LogOutDoctor();
  }
}
