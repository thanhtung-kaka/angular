import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { QuantriService } from 'src/app/service/quantri.service';

@Component({
  selector: 'app-qldt',
  templateUrl: './qldt.component.html',
  styleUrls: ['./qldt.component.scss']
})
export class QldtComponent implements OnInit {
  getitem1:Order[]|any=[]
  total:number
  constructor(private quantriService:QuantriService) { 
    this.total=0
  }

  ngOnInit(): void {
    this.getitem()
    console.log(this.getitem1)
    this.totalrevenue()
  }
  getitem(){
    this.getitem1=this.quantriService.getacceptance()
  }
  totalrevenue()
  {
   var tong=0
    for(let i=0;i<this.getitem1.length;i++){
       console.log(this.getitem1[i])
      this.getitem1[i].forEach(function(item:any){
        tong=tong+item.total
      })
    }
    return this.total=tong
  }
}
