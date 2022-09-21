import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from 'src/environments/environment';
import { cartItem } from '../models/cartItem';
import { product } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product:product=new product();
  @Output() addProudctToCartList:EventEmitter<any> = new EventEmitter();
  addToCart:string="Add To Cart";
  currentCurrency:string=Currency;
  quatity:number=1;
  quantities:number[]=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }
  ngOnInit(): void {
  }
  addProductToCart(){
    if(this.product.id){
      let newItem=new cartItem();
      newItem.product=this.product;
      newItem.amount=this.quatity;
      this.addProudctToCartList.emit(newItem);
    }
      
  }

}
