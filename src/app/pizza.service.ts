import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient:HttpClient) { }
  base_url:string="http://localhost:65110/api/pizzaService";

  getPizzas(){
    return this.httpClient.get(this.base_url+"/pizzas");
  }
  getpizzaById(pizzaId:any){
    let httpHeader=new HttpHeaders({

      'Authorization': 'Bearer' +localStorage.getItem('jwtToken')
    });
    let requestOption={headers:httpHeader};
    return this.httpClient.get(this.base_url+"/pizza/"+pizzaId,requestOption);
  }

 
}
