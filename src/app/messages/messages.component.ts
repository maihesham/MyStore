import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit ,OnDestroy{
  message:string="";
  interval:any;
  subscribe:Subscription | undefined;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  this.subscribe=this.cartService.alertTask$.subscribe(a=>{
    this.message=a;
    this.setIntervalToDisapper();
  })
  }
  setIntervalToDisapper(){
    if(this.interval){
      clearInterval(this.interval);
    }
    this.interval= setInterval(()=>{
      this.message='';
    },7000)
  }
  ngOnDestroy(): void {
    if(this.interval){
      clearInterval(this.interval);
    }
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
  }


}
