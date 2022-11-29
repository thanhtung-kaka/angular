import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // check1:any
  listRegister:User[]=[];
  user:User=new User
public adminLogin:Admin|any
 public currentUser:User[]|any=[];
 public strNote:User[]|any=[]
 key="Ao1"
    constructor( private router:Router) { 
      this.read();
    }
    saves(){
    
      localStorage.setItem('listuser',JSON.stringify(this.listRegister));
      alert('đăng ký thành công')
      this.router.navigate(['client/login'])
    }
    update(){
      // this.listRegister.pop()
      localStorage.setItem('listuser',JSON.stringify(this.listRegister));
        alert('cập nhật thành công')
    location.reload()
  }

    public login(user:User){
      let getuser:any
      return new Promise ((res,rej)=>{
        try 
        {
          getuser=this.listRegister.find(function(item:any){
            if(user.email==item.email && user.password == item.password){
             getuser=item
                localStorage.setItem("currentUser",JSON.stringify(getuser));
                res(getuser);
            }
          })
        } 
        catch (error)
        {
          rej(error);
          alert("sai tên đăng nhập hoặc mật khẩu")
        }
      })
    }

  read(){
  try {
    let strNote = localStorage.getItem('listuser');
    if(strNote)
    {
    return this.listRegister= JSON.parse(strNote);
    }
    } catch (error) {
    alert('Du lieu khong hop le')
    }
  }


  getuser(){//lay ra user khi đăng nhập
    try {
      let strNote = localStorage.getItem('currentUser');
      if(strNote)
      {
      return  JSON.parse(strNote);
      }
      } catch (error) {
      alert('Du lieu khong hop le')
      }
    
    }

  check(){//ham nay tra ra true false
  try {
    let strcurrentUser = localStorage.getItem("currentUser");
    if(strcurrentUser && strcurrentUser.length >0)
    {
      this.currentUser = JSON.parse(strcurrentUser);
      return true;
    }
   
  } catch (error) {
    
  }
  return false;
      
  }

dangxuatuser()
{
  localStorage.removeItem("currentUser")
}




loginadmin(admin:Admin){
  return new Promise((resolve,reject)=>{
    try {
      if(admin.name=="admin"&& admin.password=="admin")
      {
        localStorage.setItem("adminLogin", JSON.stringify(admin));
        resolve(admin)
      }else{
        reject();
      }
    } catch (error) {
      reject(error)
    }
  })
}

checkLoginAdmin()
{
  let strUser=localStorage.getItem("adminLogin")
  if(strUser&&strUser.length>0)
  {
    this.adminLogin=JSON.parse(strUser);
    return true
  }
  return false;
}

logoutAdmin()
{
  localStorage.removeItem("adminLogin")
}


}
