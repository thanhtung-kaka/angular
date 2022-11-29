import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CartComponent } from '../pages/cart/cart.component';
import { DangkyComponent } from '../pages/dangky/dangky.component';
import { LoginComponent } from '../pages/login/login.component';
import { OrderComponent } from '../pages/order/order.component';
import { ProductComponent } from '../pages/product/product.component';
import { TtcnComponent } from '../pages/profile/child/ttcn/ttcn.component';
import { ProfileComponent } from '../pages/profile/profile.component';

const routes: Routes = [
  {
    path:"client",
    component:LayoutComponent,
    children:[
        {
            path:"",
            redirectTo:"product",
            pathMatch:"full"
        },
        {
            path:"product",
            component:ProductComponent
        },
       {
        path:"cart",
        component:CartComponent
       },
       {
        path:"order",
        component:OrderComponent
       },
       {
        path:"login",
        component:LoginComponent
       },
       {
        path:"dangky",
        component:DangkyComponent
       },
       {
        path:"profile",
        component:ProfileComponent,
        children:[
          {
            path:"",
            redirectTo:"ttcn",
            pathMatch:"full"
        },
        {
            path:"ttcn",
            component:TtcnComponent
        },
        ]
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class clientRouting { }