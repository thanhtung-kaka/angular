import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
listUser:User[]|any=[]
  constructor(private authsevice:AuthService) { }

  ngOnInit(): void {
    this.getusser()
    // console.log(this.listUser)
  
  }
getusser(){
  this.listUser=this.authsevice.read();
}
xoa(i:number){
  this.listUser.splice(i,1)
  localStorage.setItem("listuser",JSON.stringify(this.listUser))
}
}
