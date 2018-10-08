import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../model/passenger.interface';



@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: ['./passenger-dashboard.scss'],
  template: `
    <div>
    <h3>Airline Passengers</h3>
    <app-passenger-count [items]="passengers"></app-passenger-count>
    <app-passenger-detail *ngFor="let passenger of passengers"
      [detail]="passenger"
      (remove)="handleRemove($event)"
      (edit)="handleEdit($event)">

    </app-passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent  implements OnInit{

  passengers: Passenger[];

  constructor() { }

  ngOnInit(): void {
    this.passengers = [{
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

  handleEdit (event) {
    console.log(event);
  }

  handleRemove (event: Passenger) {
    console.log(event);
  }

}

