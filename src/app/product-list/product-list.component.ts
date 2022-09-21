import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cartItem } from '../models/cartItem';
import { product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:product[]=[];
  private getproductlistSubscribe: Subscription | undefined;
  constructor(private productServices:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    //call to get product list here 
    this.getproductlistSubscribe=this.productServices.getProductList().subscribe(resulte=>{
            this.productList=resulte;
    })
  }
  AddToShoppingCart(newItem:cartItem){
    if(newItem){
      this.cartService.addProductToCart(newItem);
    }
  }
  ngOnDestroy() {
    if(this.getproductlistSubscribe!=null && this.getproductlistSubscribe!=undefined)
          this.getproductlistSubscribe.unsubscribe();
  }

}
