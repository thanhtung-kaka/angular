import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { QuantriService } from 'src/app/service/quantri.service';

@Component({
  selector: 'app-quanlihanghoa',
  templateUrl: './quanlihanghoa.component.html',
  styleUrls: ['./quanlihanghoa.component.scss']
})
export class QuanlihanghoaComponent implements OnInit {
  listItem:product[]|any=[];
  private id:number|any=0;
  constructor(private apiProduct:ProductService,private quantri:QuantriService, ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.apiProduct.getALlproduct().then(item=>{
      this.listItem=item;
    }).catch()
  }
  xoaItem(i:any){
    this.id = new Number(i);
    this.quantri.deleteProduct(this.id)
    setTimeout(this.reload,1000)

  }
  reload(){
  
    location.reload()
  }
 
}
