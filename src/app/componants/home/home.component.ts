import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interface/good.interface';
import { ProductService } from 'src/app/servisee/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  products:any[] = [];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {  
    this.service.getAllProducts().subscribe((res:any) => {
  
      this.products = res      
     },
     errpr=>{alert(errpr.massege)}
     )
  }
 
}
