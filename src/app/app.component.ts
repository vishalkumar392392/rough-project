import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  serverElements = [{type:'server',name:'TestServer',content:'Just a test!'}];
  
  onServerAdded(serverData:{name:string,content:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBluePrintAdded(bluePrint:{name:string,content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrint.name,
      content: bluePrint.content
    });
  }
  
}
