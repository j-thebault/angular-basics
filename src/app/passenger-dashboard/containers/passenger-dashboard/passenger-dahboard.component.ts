import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../model/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';



@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: ['./passenger-dashboard.scss'],
  template: `
    <div>
    <h3>Airline Passengers</h3>
    <app-passenger-count [items]="passengers"></app-passenger-count>


    <div *ngFor="let passenger of passengers">
      {{passenger.fullname}}
    </div>

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

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

  handleEdit (event) {
    console.log(event);
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id ){
        passenger = Object.assign({}, passenger, {fullname : event.fullname});
      }
      return passenger;
    });
    console.log(this.passengers);
  }

  handleRemove (event: Passenger) {
    console.log(event);
    this.passengers = this.passengers.filter((passenger:Passenger) => passenger.id !== event.id);
  }

}

