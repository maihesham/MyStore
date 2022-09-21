import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataUrl:string="assets/data.json";
  constructor(private http:HttpClient) { }
  getProductList():Observable<product[]>{
    return this.http.get<product[]>(this.dataUrl);
   }
   
   getProductDetails(id: number) {
    return this.http.get<product[]>(this.dataUrl)
      .pipe(
        map((items: product[]) => {
          return items.find((item: product) => {
            return item.id == id;
          });
        })
      );
  }
}
