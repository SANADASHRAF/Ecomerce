import { Component, Input, OnInit } from '@angular/core';
import { AdmincartService } from 'src/app/servisee/admincart.service';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css']
})
export class AdminCartComponent implements OnInit {


  constructor(private service:AdmincartService) { }
  carts:any[]=[];
  @Input() data:any={};

  ngOnInit(): void {
    
    this.getallcart()
  }

  getallcart(){
    this.service.getallcaets().subscribe((res:any)=>{
      this.carts=res
    })
  }


  deletecart(id:any)
  {
    this.service.deletecartproduct(id).subscribe((res:any)=>{
      this.getallcart()
      alert('item deleted success')
    })
  }
}
