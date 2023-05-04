import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private fb:FormBuilder ,private userService:UserService, private router:Router){}


  RegistrationForm=this.fb.group({
    emailId: ['',[Validators.required]],
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })

  saveData(){
    console.log(this.RegistrationForm.value);
    this.userService.addUser(this.RegistrationForm.value).subscribe(data=>{
      alert("User Registerd successfully");
      this.router.navigateByUrl("/login")
      console.log(data);
    });
  }
}
