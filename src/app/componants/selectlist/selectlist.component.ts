import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selectlist',
  templateUrl: './selectlist.component.html',
  styleUrls: ['./selectlist.component.css']
})
export class SelectlistComponent implements OnInit {

 @Input() titel:string=" ";
 @Input() data:any[]=[];
 @Output() receivecategory=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  detectchanges(event:any)
  {
    this.receivecategory.emit(event);
  }
}
