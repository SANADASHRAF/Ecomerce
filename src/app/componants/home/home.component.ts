import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interface/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods:Good[]=[
    {name:"AMD Ryzen",price:110 ,description:"15.6 Inch I7-9750H RTX 2070 Super Streaming Laptop With 1tb Hard Drive" ,photourl:"assets/p1.jpg"},
    {name:"Lenovo",price:200 ,description:"15.6 Inch I7-9750H RTX 2070 Super Streaming Laptop With 1tb Hard Drive" ,photourl:"assets/p2.jpg"},
    {name:"hP",price: 230 ,description:"15.6 Inch I7-9750H RTX 2070 Super Streaming Laptop With 1tb Hard Drive" ,photourl:"assets/p3.jpg"},
    {name:"Dell",price:150 ,description:"15.6 Inch I7-9750H RTX 2070 Super Streaming Laptop With 1tb Hard Drive" ,photourl:"assets/p4.jpg"},
    {name:"Sony",price: 100,description:"15.6 Inch I7-9750H RTX 2070 Super Streaming Laptop With 1tb Hard Drive" ,photourl:"assets/p5.jpg"},
    {name:"Lenovo",price: 300,description:"15.6 Inch I7-9750H RTX 2070 Super Streaming Laptop With 1tb Hard Drive" ,photourl:"assets/p6.jpg"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
  Addtocart(index: any){
  console.log("added",this.goods[index])
  }
}
