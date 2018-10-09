import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Passenger} from '../../model/passenger.interface';
import {Baggage} from '../../model/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      {{detail | json}}
      <div>
        Passenger Name :
        <input type="text" required name="fullname" #fullname="ngModel" [ngModel]="detail?.fullname"/>
        <div class="error" *ngIf="fullname?.dirty && fullname?.errors?.required">
          Passenger Name is required
        </div>
      </div>
      <div>
        Passenger ID :
        <input required type="text" #id="ngModel" name="id" [ngModel]="detail?.id"/>
        <div class="error" *ngIf="id?.dirty && id?.errors?.required">
          Id is required
        </div>
      </div>
      <div>
        <label>
          <input type="checkbox" name="checkedIn" (ngModelChange)="toggleCheckIn($event)" [ngModel]="detail?.checkedIn"/>
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in Date:
        <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate"/>
      </div>
      <div>
        Luggage :
        <select name="baggage" [ngModel]="detail?.baggage">
          <option *ngFor="let baggageType of baggageTypes" [value]="baggageType.key" [selected]="baggageType.key === detail?.baggage">
            {{baggageType.value}}
          </option>
        </select>
      </div>

      <button type="submit" [disabled]="form.invalid">
        Update Passenger
      </button>
    </form>
  `
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggageTypes: Baggage[] = [{
    key: 'none',
    value: 'No Baggage'
  }, {
    key: 'hand-only',
    value: 'Hand Baggage'
  }, {
    key: 'hold-only',
    value: 'Hold Baggage'
  }, {
    key: 'hand-hold',
    value: 'Hand and Hold Baggage'
  }];

  constructor() {
  }

  ngOnInit() {

  }

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
