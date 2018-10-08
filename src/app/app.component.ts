import { Component } from '@angular/core';



interface Child {
  name: string;
  age: number;
}
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children?: Child[];
}
@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
      <li *ngFor="let passenger of passengers; let i = index">
      <span class="status" [class.checked-in]="passenger.checkedIn"></span> {{ i }} : {{passenger.fullname}}
      <p>{{passenger | json}}</p>
      <div class="date">
        Check in Date :
        {{passenger.checkedIn ?  (passenger.checkInDate | date: 'y MMMM dd') : 'Not Check In'}}
      </div>
      <div class="children">
        Children : {{passenger.children?.length || 0}}
      </div>
      </li>
      </ul>
    </div>
  `,
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  passengers: Passenger [] = [{
    id : 1,
    fullname : 'Stephen',
    checkedIn : true,
    checkInDate : 1490742000000
  }, {
    id : 2,
    fullname : 'Rose',
    checkedIn : false,
    children: [{name: 'Todd', age: 12}, { name: 'Titi', age: 15}]
  }, {
    id : 3,
    fullname : 'James',
    checkedIn : true
  }, {
    id : 4,
    fullname : 'Louise',
    checkedIn : true
  }];
}
