import { product } from "./product";
export class cartItem {
    product:product;
    amount:number;
    constructor(){
        this.product=new product();
        this.amount=0;
    }
 }
