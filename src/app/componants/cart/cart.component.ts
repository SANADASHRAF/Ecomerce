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
  // addcarrt(){
  //   let products=this.cartproducts.map(item=>{
  //     return (productId:item.item.id ,quantity:item.quantity)
  //   } )

  //   let model={
  //     userId:5,
  //     date:new Date(),
  //     products:products
  //   }

  //   this.service.addorder(model).subscribe(
  //     (res:any)=>{alert('addee successfully')},
      
  //   )


  // }

  
}
