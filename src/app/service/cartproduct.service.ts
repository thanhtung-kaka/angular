import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../model/order.model';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'

})
export class CartproductService {
  public search = new BehaviorSubject<string>("");
 public order:Order=new Order
 user1:User[]|any=[]
  date:Date=new Date
  Numbercart:[]|any=[]
  key="No1"
      bynow(order:Order)
      {
        if(this.authSevice.check()){
        order.idorder=Date.now()
        this.user1=this.authSevice.getuser()
        order.user.push(this.user1)
        order.id=this.getIdcurrent()
        var listorder=this.getOrder();
        listorder.push(order)
        localStorage.setItem(this.key,JSON.stringify(listorder))
        this.router.navigate(['/client/order']);
        setTimeout(this.reload,10)
        }else{
         alert('bạn phải đăng nhập')
          this.router.navigate(['/client/login'])
          setTimeout(this.reload,10)
          
        }
       
      }
      reload(){
        location.reload()
      }
      getIdcurrent(){ ///lay ra id cua nguoi dung dang dawng nhap
        var idUser=this.authSevice.getuser()
         return idUser.userid
         }
    getOrder()
    {
            var getOrder=localStorage.getItem(this.key)
          try {
            if(getOrder){
              return JSON.parse(getOrder)
            }else{
              return []
            }
          } catch (error) {
            return error
          }
    } 
  constructor(private authSevice:AuthService,private router:Router) { }
 
}
