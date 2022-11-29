import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { CartproductService } from 'src/app/service/cartproduct.service';
import { QuantriService } from 'src/app/service/quantri.service';

@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrls: ['./listorder.component.scss']
})
export class ListorderComponent implements OnInit {
listitem:Order[]|any=[]
Itemsplice:Order=new Order
getitem1:Order[]|any=[]
email:string|any

  constructor(private order:CartproductService,private quantriService:QuantriService) { }

  ngOnInit(): void {
    this.getlistItem()
    this.getitem()
    console.log(this.getitem1)
 

  }
  getlistItem()
  {
    this.listitem=this.order.getOrder()
  }
pheduyet(i:Number){
  this.Itemsplice=this.listitem.splice(i,1)
  this.quantriService.listitem.push(this.Itemsplice)
  this.quantriService.acceptance()
  location.reload()
  this.listitem.splice(i,1)
  localStorage.setItem("No1",JSON.stringify(this.listitem))
}
getitem(){
  this.getitem1=this.quantriService.getacceptance()
}
}
