import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import {Passenger} from '../../model/passenger.interface';

@Component({
  selector: 'app-passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <app-passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></app-passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {

  passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService) {
  }

  ngOnInit(): void {
    this.passengerService.getPassenger(1).subscribe((passenger: Passenger) => {
      this.passenger = passenger;
    });
  }

  onUpdatePassenger(passenger: Passenger) {
    this.passengerService.updatePassenger(passenger).subscribe((updatedPassenger: Passenger) => {
      // this should probably be immutable as our service is returning us an object from server so it will be a different object
      // this.passenger = updatedPassenger;
      // however will will reassign as we should be independnat from service internals
      this.passenger = Object.assign({}, updatedPassenger);
    });
  }
}

