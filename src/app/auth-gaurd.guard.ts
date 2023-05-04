import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if((sessionStorage.getItem("loginValue"))=="true"){
      return true;
    }
    else if( sessionStorage.getItem("loginValue")==null ){
      alert("Your are not Logged in ")
      this.router.navigateByUrl("/login");
      return false;
    }
    else {
      return false;
    }
  }
}