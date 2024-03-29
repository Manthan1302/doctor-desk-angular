import { Component } from '@angular/core';
import { DoctorRegisterService } from './../DoctorServices/DoctorRegister.service';
import { NgForm } from '@angular/forms';
import { DoctorLoginService } from '../DoctorServices/DoctorLogin.service';

import { DoctorRegistration } from '../doctorModel/DoctorRegistrationModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {


  constructor(private doctorRegisterService: DoctorRegisterService) { }




  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.doctorRegisterService.getDoctor().subscribe(e=>{
    //   console.log(e);

    // })

  }
  //doctor Register Function
  registerDoctor(form: DoctorRegistration) {
    this.doctorRegisterService.RegisterDoctor(form).subscribe(result => {
      if (result) {
        console.log(result);
        
        return alert("Data Added")
      } else {
        return alert("something Went Wrong")
      }
    })
  }




  RegisterDoctor(data: DoctorRegistration) {
    console.log(data);
  }

}
