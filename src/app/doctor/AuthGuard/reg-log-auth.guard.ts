import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorComonService } from './../DoctorServices/DoctorComon.service';


@Injectable({
  providedIn: 'root'
})
export class RegLogAuthGuard implements CanActivate {
  constructor(private doctorComonService:DoctorComonService,
    private router:Router
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let authKey=this.doctorComonService.getAuthKey()
      console.log(authKey);

      if(authKey==='"DoctorAuthKey"'){
        this.router.navigate(['doctordashbord'])
      }else{
        return true
        // return false
      }
      

    return true;
  }
  
}
