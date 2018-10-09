import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import {Passenger} from '../../model/passenger.interface';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <button (click)="goBack()"> &lsaquo; Go Back </button>
      <app-passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></app-passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {

  passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((data: Params) => this.passengerService.getPassenger(data.id))
    )
    // subscribing to the inner observable
    // if a new value is emit from the first observable (ie a new navigation occurs), the first subscription will be ignored...
      .subscribe((passenger: Passenger) => this.passenger = passenger);
  }

  onUpdatePassenger(passenger: Passenger) {
    this.passengerService.updatePassenger(passenger).subscribe((updatedPassenger: Passenger) => {
      // this should probably be immutable as our service is returning us an object from server so it will be a different object
      // this.passenger = updatedPassenger;
      // however will will reassign as we should be independent from service internals
      this.passenger = Object.assign({}, updatedPassenger);
    });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}

