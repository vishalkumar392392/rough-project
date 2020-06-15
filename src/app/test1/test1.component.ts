import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  @Input() testPropertiesInput:string;
  @Output() testemitter= new EventEmitter<{name:string,type:string}>();
  constructor() { }

  ngOnInit() {
  }

  onTest(){
    this.testemitter.emit({name:'vishal',type:'test'})
  }

}
