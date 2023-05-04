import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private fb:FormBuilder,private userService:UserService,private router:Router,private authService:AuthService){}

  LoginForm=this.fb.group({
    emailId: ['',[Validators.required]],
    password: ['']
  })
 responseData:any;
  login(){
    if(sessionStorage.getItem("loginValue")=="true"){
      alert("Already logged in !!!!");
    }
    else{
      this.userService.login(this.LoginForm.value).subscribe(data=>{
      console.log(data);
      this.responseData=data;
      sessionStorage.setItem("jwtToken",this.responseData.token);
      sessionStorage.setItem("userObj",Object.values(this.LoginForm.value)[0]!)
      console.log(this.responseData.token);

      this.userService.getUserById().subscribe(data=>{
      console.log(Object.values(data)[1]);
      if(this.responseData.token!=null){
      alert("Welcome "+Object.values(data)[1]+"!!!!");
      sessionStorage.setItem("loginValue","true");
      this.router.navigateByUrl("/pizzas");
      }
    });
  })
  }
}
}