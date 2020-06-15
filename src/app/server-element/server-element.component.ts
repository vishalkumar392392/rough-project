import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit ,OnChanges,AfterContentInit{

 @Input('srvElement') element:{type:string,name:string,content:string};
 @ContentChild('elementName',{static:true}) elementName:ElementRef;
  constructor() { 
    console.log('constructor called')
    console.log("ng-content"+this.elementName)
  }

  ngOnInit() {
    console.log('ngOnInit called')
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes)
  }
  ngAfterContentInit(){
    console.log("ng-content ngAfterContentInit"+this.elementName)
  }

}
