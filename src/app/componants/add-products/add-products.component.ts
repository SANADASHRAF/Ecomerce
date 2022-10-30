import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/servisee/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  products:any[] = [];
  categories:string[] = [];
  loading:boolean = false;
  base64:any = '';
  form!:FormGroup
  

  constructor(private service:ProductService, private build:FormBuilder) { }

  ngOnInit(): void {
    
    this.getProducts()
  }


  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     }   )
  }
}
