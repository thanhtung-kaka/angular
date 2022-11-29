import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVICE:string="https://62b4aa9c530b26da4cc356e8.mockapi.io";

  header:HttpHeaders|any;

  constructor(private httpClient:HttpClient) {
    this.header=new HttpHeaders().set('Content-type','application/json')
    this.header=this.header.set('Authorization','Bearer ')
   }

 get(path:string="",params:any={}){
    return new Promise((thanhcong,thatbai)=>{
     try {
      this.httpClient.get(this.API_SERVICE+path,{params,headers:this.header})
      .subscribe((res:any)=>{
          thanhcong(res)
      });
     } catch (error) {
       thatbai(error);
       console.log("error")
     }
    });
 }

 post(path:string="",body:any={},params:any={}){
  return new Promise((thanhcong,thatbai)=>{
   try {
    this.httpClient.post(this.API_SERVICE+path,body,{params,headers:this.header})
    .subscribe((res:any)=>{
        thanhcong(res)
    });
   } catch (error) {
     thatbai(error);
   }
  });
}
put(path:string="",body:any={},params:any={}){
  return new Promise((thanhcong,thatbai)=>{
   try {
    this.httpClient.put(this.API_SERVICE+path,body,{params,headers:this.header})
    .subscribe((res:any)=>{
        thanhcong(res)
        alert("update thành công");
    });
   } catch (error) {
     thatbai(error);
     console.log("update bại");
   }
  });
}
delete(path:string="",params:any={}){
  return new Promise((thanhcong,thatbai)=>{
   try {
    this.httpClient.delete(this.API_SERVICE+path,{params,headers:this.header})
    .subscribe((res:any)=>{
      alert("da xoa")
        thanhcong(res)
    });
   } catch (error) {
     thatbai(error);
     console.log("error")
     alert("chưa xóa")
   }
  });
}
}
