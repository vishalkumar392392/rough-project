import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name:string,content:string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string,content:string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContent', {static: true}) serverContent:ElementRef;
  constructor() { }

  ngOnInit() {
  }


  onAddServer(inputserverName:HTMLInputElement) {
    this.serverCreated.emit({name:inputserverName.value,
      content:this.serverContent.nativeElement.value});
    
  }

  onAddBlueprint(inputserverName:HTMLInputElement) {
    this.blueprintCreated.emit({name:inputserverName.value,
      content:this.serverContent.nativeElement.value});
  }

}
