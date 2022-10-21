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
  categories:any[]=[];

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }

// call serveses

//allproduct 
  getProducts() {  
    this.service.getAllProducts().subscribe((res:any) => {
  
      this.products = res      
     },
     errpr=>{alert(errpr.massege)}
     )
  }


 
  // category 
  getAllCategory(){
      this.service.getAllCategory().subscribe(
      (res:any)=>{ this.categories=res; }, 
       error   =>{alert(error)}
       )}

  //method of change event of select category 
   selectcategory(event:any){
    
        let selectcategory=event.target.value;

        if(selectcategory=="all")
        {
          this.getProducts();
        }
        else
        {
        this.gitFilteredCategory(selectcategory);
        }
       }


    gitFilteredCategory(value:string){
      this.service.gitFilteredCategory(value).subscribe(
        (res:any)=>{this.products=res},
         error    =>{alert(error)}
      )

       }
  

























  }
