import { Pizza } from "./pizza";

export class pizzaItem{
    constructor(pizza:Pizza){
        this.pizza=pizza;
    }
    pizza:Pizza;
    get amount(): number{
        return (Number(this.pizza.price));
    }
}