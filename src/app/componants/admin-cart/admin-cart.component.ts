import { Component, OnInit } from '@angular/core';
import { AdmincartService } from 'src/app/servisee/admincart.service';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css']
})
export class AdminCartComponent implements OnInit {


  constructor(private service:AdmincartService) { }
  carts:any[]=[];

  ngOnInit(): void {
    this.getallcart()
  }

  getallcart(){
    this.service.getallcaets().subscribe((res:any)=>{
      this.carts=res
    })
  }

}
