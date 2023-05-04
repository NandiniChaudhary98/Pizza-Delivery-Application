import { pizzaItem } from "./pizzaItem";

export class pizzaCart{
    items:pizzaItem[]=[];

    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item=>{
            totalPrice = item.amount + totalPrice;
        });
        return totalPrice;
    }
}