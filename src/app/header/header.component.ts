import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private router:Router){}
  LogOut(){
    if(sessionStorage.getItem("loginValue")){
      sessionStorage.clear();
      alert("You are Logged out successfully");
    }
    else{
      alert("You Are not Logged in");
      this.router.navigateByUrl("/login");
    }
  }
}
