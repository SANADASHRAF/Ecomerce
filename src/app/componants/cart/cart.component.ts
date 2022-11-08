import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/servisee/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartproducts:any[]=[]
  totalprice:any=0
  success:boolean = false
  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.getcartproduct()
  }



  getcartproduct()
  {
    if("cart" in localStorage)
    {
        this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
    }
    this.gettotalprice()
  }

  gettotalprice()
  {
   this.totalprice=0;
   for(let  x in this.cartproducts)
   {
   this.totalprice+=this.cartproducts[x].item.price*this.cartproducts[x].quantity
   }
  }


//amount of product 
  plusAmountAupdate(index:any){
    this.cartproducts[index].quantity++
    this.gettotalprice()
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
   
  }

  minesAmountAupdate(index:any)
  {
    this.cartproducts[index].quantity--
    this.gettotalprice()
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
    
  }
  detectchange()
  {
    this.gettotalprice()
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  }

  //delete product
  deleteProduct(index:any){
    this.cartproducts.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  }

  //clear all cart data
  clearcartproduct()
  {
    this.cartproducts=[]
    this.gettotalprice()
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  }

  // send order to api  and service (not finish yet)
  addCart() {
    //(map) بطلع ارى جديدة بعد مخلص اللى انا عايز اعملة 
    let products = this.cartproducts.map(item => {
     return {productId:item.item.id , quantity:item.quantity}
    })
 
     let Model = {
       userId:5,
       date: new Date(),
       products:products
     }
 
     this.service.createNewCart(Model).subscribe(res => {
       this.success = true
     })
 
     console.log(Model)
   }
  
}
