import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartproducts:any[]=[]
  totalprice:any=0
  constructor() { }

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
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  }

  //delete product
  deleteProduct(index:any){
    this.cartproducts.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  }
}
