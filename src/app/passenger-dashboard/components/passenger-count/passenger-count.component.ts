import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../model/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  styleUrls: ['./passenger-count.scss'],
  template: `
    Total Checked in :  {{checkedInCount()}} / {{items?.length}}
  `
})
export class PassengerCountComponent implements OnInit {

  @Input()
  items: Passenger[];

  constructor() {}

  ngOnInit(): void {}

  checkedInCount(): number {
    if (!this.items) {
      return 0;
    }
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

}
