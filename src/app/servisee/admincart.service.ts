import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmincartService {

  constructor( private http:HttpClient) { }
  getallcaets(){
    return this.http.get(environment.baseAPI +'carts')
  }

  deletecartproduct(id:any)
  {
    return this.http.delete(environment.baseAPI +'carts/' +id)
  }
}
