import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonServiceService } from './../PatientService/common-service.service';


@Injectable({
  providedIn: 'root'
})
export class LogRegAuthGuard implements CanActivate {
  constructor(private commonServiceService:CommonServiceService,
    private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let authKey=this.commonServiceService.getSessionAuthKey();

      if(authKey==='"PatientAuthKey"'){
        this.router.navigate(['patientDashboard'])

        return false;
      }else{
        return true
      }
  }
  
}
