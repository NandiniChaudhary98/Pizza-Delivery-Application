import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  base_url:string="http://localhost:9099/api/userService";

  addUser(userObj:any){
    console.log(userObj);
    return this.httpClient.post(this.base_url+"/register",userObj);
  }

  login(userObj:any){
    console.log(userObj)
    console.log(typeof(userObj));
    return this.httpClient.post(this.base_url+"/login",userObj);
  }

  getUserById(){
    return this.httpClient.get(this.base_url+"/user/"+sessionStorage.getItem("userObj"));
  }
}
