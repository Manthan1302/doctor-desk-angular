import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorLoginService } from '../DoctorServices/DoctorLogin.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent {
  constructor(private router: Router) {}

  logout() {
    sessionStorage.removeItem('AuthKeyDoctor');
    sessionStorage.removeItem('LogedDoctor');
    this.router.navigate(['doctorlogin']);

    console.log('logout');
  }
}
