import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaUserService {
  result: any;

  constructor(private httpClient:HttpClient) { }
  base_url:string="http://localhost:65100/api/userPizzaService/user/";


  url:string | undefined
  pizzas:any[]=[];
  pizzadata2:any[]=[]
  mailId:any
  saveUser(pizzaList:any):void{

    let httpHeader=new HttpHeaders({
      'Authorization': 'Bearer' +sessionStorage.getItem('jwtToken')
    });
    let requestOption={headers:httpHeader};
    
    this.mailId=sessionStorage.getItem("userObj")  

    Object.keys(pizzaList).forEach((element:any )=> {
      this.pizzas.push(Object.values(pizzaList[element]));
       this.pizzadata2= Object.assign({},this.pizzas[0])
       Object.keys(this.pizzadata2).forEach((element:any )=> {
         this.result=this.httpClient.post(this.base_url + this.mailId , this.pizzadata2[element].pizza,requestOption);
        this.result.subscribe((data:any)=>{
        console.log(data);
        })
       })
  });
  alert("Your Order Is Placed. Thank You!!!!!");
  }
}



// saveUser(pizzaList:any):void{
//   // const UserEmailId=sessionStorage.getItem("userObj")    
//   Object.keys(pizzaList).forEach((element:any )=> {
//     console.log(pizzaList[element].at(element))
//     this.pizzas.push(Object.values(pizzaList[element]).at(element));
  
//     console.log(this.pizzas.length)
//     console.log(this.pizzas)
//     for(let i=0; i<this.pizzas.length;i++){
//       console.log(this.pizzas[i])
//      this.pizzadata2= Object.assign({},this.pizzas[i].pizza)
//      console.log(this.pizzadata2);
//      const result=this.httpClient.post(this.base_url, this.pizzadata2);
//      result.subscribe(data=>{
//      console.log(data);
//     })
//     }
    
// });
// alert("Your Order Is Placed. Thank You!!!!!");
// }
// }
