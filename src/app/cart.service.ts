import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza';
import { pizzaCart } from './models/pizzaCart';
import { pizzaItem } from './models/pizzaItem';
import { PizzaService } from './pizza.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private pizzaService:PizzaService) {
   
   }
  private cart:pizzaCart=new pizzaCart();
  item1:[]=[]

  pizzas:any[]=[];
  
  addToCart(pizza:Pizza){
    let cartItem=this.cart.items.find(item=>item.pizza.pizzaId === pizza.pizzaId)
    if(cartItem){
      return;
    }
    this.cart.items.push(new pizzaItem(pizza));
    console.log(this.cart);
  }
  removeFromCart(pizzaId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.pizza.pizzaId != pizzaId)
  }
  getCart(){
    return this.cart;
  }
}
