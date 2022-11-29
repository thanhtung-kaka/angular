import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/model/product.model';

import { NgForm } from '@angular/forms';
import { QuantriService } from 'src/app/service/quantri.service';

@Component({
  selector: 'app-edit-hang-hoa',
  templateUrl: './edit-hang-hoa.component.html',
  styleUrls: ['./edit-hang-hoa.component.scss']
})
export class EditHangHoaComponent implements OnInit {
   id:number;
   sub: any;
  ProductDetail:product|any;
  constructor(private route: ActivatedRoute,private quantri:QuantriService) {
    this.id=0;
   }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getDetailItem();
      
      // In a real app: dispatch action to load the details here.
   });
  }
  getDetailItem(){
this.quantri.getDetail(this.id).then(data=>{
  this.ProductDetail=data;
    }).catch(err=>{
      console.log(err)
    });
   
  }
  editProduct(frm:NgForm){

  }
  updateProduct(frm:NgForm){
    if(frm.invalid)
    {
      alert("Vui long hoan thanh form")
    }else{
     this.quantri.updateProduct(this.ProductDetail,this.id).then(res=>{
     }).catch(err=>{

     })
      // frm.reset();
    }
  }
}
