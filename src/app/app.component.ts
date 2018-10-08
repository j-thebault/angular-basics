import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)"> Click Me </button>
      <input type="text" #username>
      <div>{{name}}</div>
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
  twoWayName = 'Hello';

  constructor() {}

  private handleClick(value:string) {
    console.log('handle click');
    console.log(value);
  }

  handleChange(value: string) {
    this.twoWayName = value;
  }
}
