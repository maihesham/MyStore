import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Currency } from 'src/environments/environment';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  myStore:string='MyStore';
  cartList:string='Cart List';
  numberOfItemsInCart=0;
  totalPrice=0;
  subscribeiItems:Subscription | undefined;
  subscribePrice:Subscription | undefined;
  currentCurrency=Currency;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.subscribeiItems=this.cartService.totalNumberOfItemsTask$.subscribe(a=>{
      this.numberOfItemsInCart=a;
    });
   this.subscribeiItems=this.cartService.totalPriceTask$.subscribe(z=>{
    this.totalPrice=z;
   })
  }
  ngOnDestroy(): void {
    if(this.subscribePrice){
      this.subscribePrice.unsubscribe();
    }
    if(this.subscribeiItems){
      this.subscribeiItems.unsubscribe();
    }
  }

}
