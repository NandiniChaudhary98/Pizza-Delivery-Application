import { Component } from '@angular/core';
import { __values } from 'tslib';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-view',
  templateUrl: './pizza-view.component.html',
  styleUrls: ['./pizza-view.component.css']
})
export class PizzaViewComponent {

  constructor(private pizzaService:PizzaService){}
  pizzas:Pizza[]=[];
  dataLength:any;

  ngOnInit(): void{
    this.pizzaService.getPizzas().subscribe(data=>{
        Object.keys(data).forEach((element:any )=> {
        this.pizzas.push(Object.values(data).at(element));
        });
        console.log(this.pizzas);
    });
  }
}
