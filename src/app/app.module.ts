import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './client/routing/routing.module';
import { AdminModule } from './admin/routing/admin/admin.module';
import { GuesModule } from './gues/routing/gues.module';
import { DatePipe } from './shared/date.pipe';







@NgModule({
  declarations: [
    AppComponent,
    DatePipe,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    HttpClientModule,
    AdminModule,
    GuesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
