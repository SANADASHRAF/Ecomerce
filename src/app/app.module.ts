import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { OrdersComponent } from './componants/orders/orders.component';
import { CartComponent } from './componants/cart/cart.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { SignupComponent } from './componants/signup/signup.component';

import { AcountComponent } from './componants/acount/acount.component';
import { GoodsComponent } from './componants/goods/goods.component';
import { FormsModule } from '@angular/forms'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from './servisee/product.service';
import { SpinnerComponent } from './componants/spinner/spinner.component';
import { SelectlistComponent } from './componants/selectlist/selectlist.component';
import { ProductComponent } from './componants/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OrdersComponent,
    CartComponent,
    NotFoundComponent,
    SignupComponent,
    NavbarComponent,
    AcountComponent,
    GoodsComponent,
    SpinnerComponent,
    SelectlistComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule  ,
    FormsModule ,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
