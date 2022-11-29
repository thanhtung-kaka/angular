import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from 'src/app/model/product.model';
import { QuantriService } from 'src/app/service/quantri.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  product :product=new product
  constructor(private quantri:QuantriService) { }

  ngOnInit(): void {
  }
  addProduct(frm:NgForm){
    if(frm.valid){
      this.quantri.addproduct(this.product).then((res)=>{
        alert("them thanh cong")
      }).catch(()=>{
        alert("loi them san pham")
      });
      frm.reset()
    } else{
      alert("vui long hoang thanh from")
    }
  }
}
