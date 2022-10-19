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
import { NavbarComponent } from './componants/navbar/navbar.component';
import { AcountComponent } from './componants/acount/acount.component';
import { GoodsComponent } from './componants/goods/goods.component';

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
    GoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
