import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  name:string ='';
  constructor() { }

  ngOnInit() {
  }

  onemit(emit:{name:string,type:string}){

    this.name = emit.name;
     console.log(emit.name);
     console.log(emit.type);

  }

}
