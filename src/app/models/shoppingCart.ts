import { cartItem } from "./cartItem";

export class shoppingCart {
   totalPrice:number;
   cartItem:cartItem[];
   constructor(){
    this.totalPrice=0;
    this.cartItem=[];
   }
 }
