import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './componants/cart/cart.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { ProductDetailsComponent } from './componants/product-details/product-details.component';
import { SignupComponent } from './componants/signup/signup.component';

const routes: Routes = [
 {path:'' ,component:HomeComponent},
 {path:'login', component:LoginComponent},
 {path:'signup',component:SignupComponent},
 {path:'cart',component:CartComponent},
 {path:'productdetail/:id',component:ProductDetailsComponent},
 {path:'**',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
