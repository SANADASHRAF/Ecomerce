import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interface/good.interface';
import { ProductService } from 'src/app/servisee/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //sppener
  loading:boolean=false;

  products:any[] = [];
  categories:any[]=[];

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }

// call serveses

//call service of allproduct 
  getProducts() {  
    this.loading=true;

    this.service.getAllProducts().subscribe(
      (res:any) => { this.products = res;     this.loading=false;  },
       errpr=>{alert(errpr.massege) ;this.loading=false}
     )
  }


 
  //call service of category 
  getAllCategory(){
    //sppener
    this.loading=true;

      this.service.getAllCategory().subscribe(
      (res:any)=>{ this.categories=res ; this.loading=false; }, 
       error   =>{alert(error) ;this.loading=false}
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

       
  //call service of filter selected category
      gitFilteredCategory(value:string){
        this.loading=true;

      this.service.gitFilteredCategory(value).subscribe(
        (res:any)=>{this.products=res  ;this.loading=false},
         error    =>{alert(error)  ;this.loading=false}
      )

       }
   

       

























  }
