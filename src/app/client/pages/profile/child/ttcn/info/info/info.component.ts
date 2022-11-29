import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { CartproductService } from 'src/app/service/cartproduct.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  listUser:User[]=[];
  listUser2:User[]|any=[];
  id:number|any
  user:User=new User
  constructor(private authsevice:AuthService ,private cartservice:CartproductService) { }

  ngOnInit(): void {
    this.getlistuser()
    this.getemail()
    this.filter()
  }
  // getusser(){
  //   this.listUser=this.authsevice.read();
  // }
  getlistuser()
  {
    this.listUser=this.authsevice.read()

  }
  getemail(){//lay ra id dang dang nhap
    this.id=this.cartservice.getIdcurrent()
    }


    filter(){
      this.listUser2=this.listUser.filter((a:any)=>{
        if(this.id==a.userid){
          console.log(a)
          return a
  
        }
      })
    }
    update(frm:NgForm)
    {
      if(frm.valid){
        let tmp=Object.assign({},this.listUser2);
        this.authsevice.listRegister.push(tmp);
        this.authsevice.update();
        frm.reset();
      }
      else{
        alert("vui long hoan thanh");
      }
    }
   
 
}
