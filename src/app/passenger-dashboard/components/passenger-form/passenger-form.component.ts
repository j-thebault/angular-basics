import {Component, OnInit, Input} from '@angular/core';
import {Passenger} from '../../model/passenger.interface';
import {Baggage} from '../../model/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{detail | json}}
      <div>
        Passenger Name :
        <input type="text" name="fullname" [ngModel]="detail?.fullname"/>
      </div>
      <div>
        Passenger ID :
        <input type="text" name="id" [ngModel]="detail?.id"/>
        {{form.value | json}}
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
    </form>
  `
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail: Passenger;

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
}
