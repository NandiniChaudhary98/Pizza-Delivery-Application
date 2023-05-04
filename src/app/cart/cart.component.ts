import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Pizza } from '../models/pizza';
import { pizzaCart } from '../models/pizzaCart';
import { pizzaItem } from '../models/pizzaItem';
import { PizzaUserService } from '../pizza-user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!: pizzaCart;
  constructor(private cartService:CartService,private pizzaUserService:PizzaUserService ,private router:Router){
    this.setCart();
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(item:pizzaItem){
    this.cartService.removeFromCart(item.pizza.pizzaId);
    this.setCart();
  }
  PlaceOrder(){
    if(this.cart.items.length!=0){      
      this.pizzaUserService.saveUser(this.cart);
      this.router.navigateByUrl("pizzas");
    }
    else{
      alert("Your cart is empty")
    }
  }
}
