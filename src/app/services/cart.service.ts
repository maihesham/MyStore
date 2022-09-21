import { Injectable } from '@angular/core';
import { cartItem } from '../models/cartItem';
import { shoppingCart } from '../models/shoppingCart';
import { product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalNumberOfItemsTask$=new BehaviorSubject<number>(0);
  cartList:shoppingCart=new shoppingCart();
  cartListTask$=new BehaviorSubject<shoppingCart>(this.cartList);
  alertTask$=new BehaviorSubject<string>("");
  totalPriceTask$=new BehaviorSubject<number>(0);
  constructor() { }
  resetCart(){
    this.cartList=new shoppingCart();
    this.updates();
  }
  Alert(messagetemp:string){
    this.alertTask$.next(messagetemp);
  }
  updatecartList(){
    this.cartListTask$.next(this.cartList);
  }
  updateNumberOfItems(){
    this.totalNumberOfItemsTask$.next(this.cartList.cartItem.length);
  }
  updateTotalPrice(){
    this.totalPriceTask$.next(this.cartList.totalPrice);
  }
  updates(){
    this.calculateTotalPrice();
    this.updateNumberOfItems();
    this.updatecartList();
    this.updateTotalPrice();
  }
  addProductToCart(newItem:cartItem){
    this.removeItem(newItem);
    this.AddItem(newItem);
    this.Alert(newItem.product.name+" product Added successfully");
    this.updates();
  }
  private AddItem(newItem:cartItem){
        this.cartList.cartItem.push(newItem);
  }
  private removeItem(newItem:cartItem){
    if(this.cartList.cartItem!=null&&this.cartList.cartItem.length>0){
      this.cartList.cartItem =  this.cartList.cartItem.filter(obj =>obj.product.id!=newItem.product.id);
     }
    
  }
  updatecartListafterItemChange(newItem:cartItem){
    this.cartList.cartItem =  this.cartList.cartItem.filter(obj =>obj.amount>0);
    this.updates();
  }
  removeProductFromCart(newItem:cartItem){
           this.removeItem(newItem);
           this.Alert(newItem.product.name+" product removed successfully");
           this.updates();
           
  }
  calculateTotalPrice(){ 
    this.cartList.totalPrice=0;
    this.cartList.cartItem.forEach(a=>{
      this.cartList.totalPrice+=(a.amount*a.product.price);
    })
  }
}
