import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <input type="text" #username (input)="handleChange($event.target.value)">

    <ng-template [ngIf]="name.length > 2">
      <div> Searching for : {{name}}</div>
    </ng-template>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Ultimate Angular';
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  name = '';
  twoWayName = 'Hello';

  constructor() {}

  private handleClick(value: string) {
    console.log('handle click');
    this.name = value;
  }

  handleChange(value: string) {
    this.name = value;
  }
}
