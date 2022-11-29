import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { CartproductService } from 'src/app/service/cartproduct.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
show:boolean=false
showmodeluser:boolean=false
Numbercart:[]|any=[]
check:any
user:User[]=[]
useremail:any
  constructor(private authService:AuthService,private CartproductService:CartproductService) { 
  }

ngOnInit(): void {
this.checkout()
this.getuserlogin()
this.useremail=this.getuserlogin()
this.Numbercart=this.CartproductService.Numbercart
  }
dangxuat()
{
  this.authService.dangxuatuser()  
  location.reload()
}

checkout(){
  this.check=this.authService.check()
  if(this.check==true){
    this.show=true
  }else{
    this.show=false
  }
}
getuserlogin()
{
let email
   this.user=this.authService.getuser()
   this.check=this.authService.check()
if(this.check==true){
  for(let item of Object.values(this.user)){
    email=item
  }
}
  return email
}

}
