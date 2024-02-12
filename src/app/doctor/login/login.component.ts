import { Component } from '@angular/core';
import { DoctorLoginService } from '../DoctorServices/DoctorLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private doctorLoginService:DoctorLoginService){}


  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.doctorLoginService.LoginDoctor()
    
  }
}
