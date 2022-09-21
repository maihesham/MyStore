import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Currency } from 'src/environments/environment';
import { cartItem } from '../models/cartItem';
import { product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy  {

  product:product=new product();
  addToCart:string="add To Cart";
  currentCurrency:string=Currency;
  backToList:string="back To List";
  quatity:number=1;
  quantities:number[]=[1,2,3,4,5,6,7,8,9,10];
  subscribe:Subscription | undefined;
  constructor(private activatedRoute: ActivatedRoute,private productServices:ProductService,private cartService:CartService ) { }

  ngOnInit(): void {
    
    this.getProductDetails(this.activatedRoute.snapshot.params['id']);
  }
  addProductToCart(){
    let newItem=new cartItem();
    newItem.product=this.product;
    newItem.amount=this.quatity;
    this.cartService.addProductToCart(newItem);
  }
  getProductDetails(id:number){
    this.subscribe= this.productServices.getProductDetails(id).subscribe(a=>{
         if(a){
          this.product=a;
         }
        
     })
  }
  ngOnDestroy(): void {
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
  }

}
