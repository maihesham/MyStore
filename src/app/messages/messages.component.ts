import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessageService]
})
export class MessagesComponent implements OnInit ,OnDestroy{
  subscribe:Subscription | undefined;
  constructor(private cartService:CartService,private messageService: MessageService) { }

  ngOnInit(): void {
  this.subscribe=this.cartService.alertTask$.subscribe(messaage=>{
    this.addSingle(messaage);
  })
  }
  addSingle(message:string) {
    this.messageService.add({severity:'success', summary: 'Success', detail:message});
  }
clear() {
    this.messageService.clear();
 }
  
  ngOnDestroy(): void {
    this.clear();
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
  }


}
