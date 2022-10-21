import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  //service for ALL product 
  getAllProducts() {
    return this.http.get(environment.baseAPI+'products');
  }


  getAllCategory(){
    return this.http.get(environment.baseAPI+'products/categories');
  }

  gitFilteredCategory(cat:string){
    return this.http.get(environment.baseAPI+'products/category/'+cat);
  }
}
