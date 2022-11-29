import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { AuthService } from 'src/app/service/auth.service';
import { CartproductService } from 'src/app/service/cartproduct.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
listOrder:Order|any= []
fitercategory:Order|any=[]
Numbercart:number|any
id:number|any

  constructor(private cartservice:CartproductService ,private authSecvice:AuthService) { }

  ngOnInit(): void {
    this.getlistOrder()
    this.getid()
    this.filter() 
    console.log(this.lenghtitem())
  }
  getlistOrder()
  {
    this.listOrder=this.cartservice.getOrder()

  }
  reload(){
    location.reload()
  }
  filter(){

    this.fitercategory=this.listOrder.filter((a:any)=>{
      if(a.id==this.id){
        return a
      }
    })
    
  }

  getid(){//lay ra id dang dang nha
  this.id=this.cartservice.getIdcurrent()
  }
  lenghtitem()
  {
    let number=0
   number=this.fitercategory.length
 this.cartservice.Numbercart.push(number)
 return this.cartservice.Numbercart
  }
}
