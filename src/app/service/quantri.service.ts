import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';
import { product } from '../model/product.model';
import { ApiService } from './api.service';
import { CartproductService } from './cartproduct.service';

@Injectable({
  providedIn: 'root'
})
export class QuantriService extends ApiService{

  constructor(private cartproduct:CartproductService,httpClient:HttpClient) { 
    super(httpClient);
  }

public listitem:Order|any=[]
listitem1:Order[]|any=[]

acceptance()
{
localStorage.setItem("Itemslice",JSON.stringify(this.listitem))
}
getacceptance()
{
  {
    var getitem=localStorage.getItem("Itemslice")
  try {
    if(getitem){
      return this.listitem=JSON.parse(getitem)
    }else{
      return ['lỗi']
    }
  } catch (error) {
    return []
  }
}
}
    addproduct(data:product)
    {
      return this.post("/api/angular/products",data)
    }
    getDetail(id:number){
      return this.get("/api/angular/products/"+id)
    }
    updateProduct(data:product,id:number){
        return this.put("/api/angular/products/"+id,data);
    }
    deleteProduct(id:number){
      return this.delete("/api/angular/products/"+id)
    }
}

