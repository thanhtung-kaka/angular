import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../model/order.model';
import { product } from '../model/product.model';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService {
product:product[]|any= []
id:number=0;
public order:Order[]|any=new Order
public listitem=new BehaviorSubject([])
  constructor(httpClient:HttpClient) {
    super(httpClient);
  }
   getALlproduct(){
     return this.get("/api/angular/products")
   }
  buynow(item:product)
      {
      this.listitem.next(this.order)
      this.order.product.push(item)
      }
      getdettel()
      {
        return this.listitem.asObservable()
     
      }

      //get san pham theo id
     
}
