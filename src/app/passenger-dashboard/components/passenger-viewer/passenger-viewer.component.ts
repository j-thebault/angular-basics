import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../model/passenger.interface';

@Component({
  selector: 'app-passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <app-passenger-form [detail]="passenger"></app-passenger-form>
    </div>
    `
})
export class PassengerViewerComponent implements OnInit {

  passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService.getPassenger(1).subscribe((passenger: Passenger) => {
      this.passenger =  passenger;
    });
   }
}

