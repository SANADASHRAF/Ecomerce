import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './componants/cart/cart.component';
import { GoodsComponent } from './componants/goods/goods.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/login/login.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { SignupComponent } from './componants/signup/signup.component';

const routes: Routes = [
 {path:'' ,component:HomeComponent},
 {path:'login', component:LoginComponent},
 {path:'signup',component:SignupComponent},
 {path:'cart',component:CartComponent},
 {path:'admin',component:GoodsComponent},
 {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
