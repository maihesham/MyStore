import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Currency } from 'src/environments/environment';
import { cartItem } from '../models/cartItem';
import { shoppingCart } from '../models/shoppingCart';
import { User } from '../models/User';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy  {
currentCurrency=Currency;
 cart:shoppingCart=new shoppingCart();
 NoDataInCartList:string="No Products In Cart List";
 subscribe:Subscription | undefined;
 showInfo:boolean=false;
 user:User=new User();
  constructor(private cartService:CartService,private router:Router) { }
  ngOnDestroy(): void {
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscribe=this.cartService.cartListTask$.subscribe(a=>{
      this.cart=a;
      if(this.cart&&this.cart.cartItem.length>0){
        this.showInfo=true;
      }else{
        this.showInfo=false;
      }
    })
  }
  itemChanged(value:any,item:cartItem){
    item.amount=value;
    this.cartService.updatecartListafterItemChange(item);
  }
  reomveItemFromCart(item:cartItem){
         this.cartService.removeProductFromCart(item);
  }
  onSubmit(form:NgForm){
      if(form.valid){
        this.router.navigate(['confermation', this.user.name,this.cart.totalPrice]);
        this.cartService.resetCart();
      }
  }
}
