import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <h1>{{title}}</h1>
      <div>
      {{numberOne + numberTwo}}
      </div>
      <div>
        {{isHappy ? ':-)':':-('}}
      </div>
      <input type="text" [value]='name'>
      <div>
      {{name}}
      </div>
      <div>
      <input type="text" [value]='name' (blur)='handleBlur($event)'>
      <div>
      {{name}}
        </div>
      </div>
      <div>
        TWO WAY DATABINDING WITH NG MODEL
        <input type="text" [(ngModel)]="twoWayName">
        <div>{{twoWayName}}<div>
      </div>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Ultimate Angular';
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  name = 'Tood';
  twoWayName = 'Hello'

  constructor() {}

  handleBlur(event: any) {
    console.log(event);
    this.name = event.target.value;
  }

  handleBlurTwoWayName(event: any) {
    console.log(event);
    this.twoWayName = event.target.value;
    // this.name = event.target.value;
  }

  handleChange(value:string){
    this.twoWayName = value;
  }
}
