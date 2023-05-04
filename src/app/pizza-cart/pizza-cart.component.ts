import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-cart',
  templateUrl: './pizza-cart.component.html',
  styleUrls: ['./pizza-cart.component.css']
})
export class PizzaCartComponent {
  constructor(private pizzaService:PizzaService, private activatedRoute:ActivatedRoute , private router:Router, private cartService:CartService){}

  pizzaDetails:any={};
  newPizza:any={};
  id:any;
  


  ngOnInit(): void{
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id = params.get("pizzaId") ?? 0;
      this.pizzaService.getpizzaById(this.id).subscribe(data=>{
        console.log(data);
        this.newPizza=data;
      })
    })
  }

  addToPizzaCart(){
    this.cartService.addToCart(this.newPizza);
    this.router.navigateByUrl("cart")
  }

}
