import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.scss']
})
export class DangkyComponent implements OnInit {
listuser:User[]|any=[]
listadc:User[]=[];
listemail:[]|any=[]
user:User=new User
keyuser="user"

  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {

  }



  onsubmit(x:NgForm){
    if(x.valid){
      let email:[]|any=[]
      let check:any
      this.listemail=this.AuthService.listRegister
      let tmp=Object.assign({},this.user);
      for(let i=0;i<this.listemail.length;i++){
        email.push(this.listemail[i].email)
       }
       check=email.indexOf(tmp.email)
       if(check==-1)
       {
        this.AuthService.listRegister.push(tmp);
        this.AuthService.saves();
        x.reset();
       }else{
        alert("email này đã được sử dụng")
        x.reset();
       }
    }
    else{
      alert("vui long hoan thanh");
    }
  }

}
