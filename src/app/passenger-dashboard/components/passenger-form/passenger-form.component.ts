import { Component, OnInit, Input } from '@angular/core';
import {Passenger} from '../../model/passenger.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form>
      form
      {{detail | json}}
    </form>
  `
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail: Passenger;

  constructor() { }

  ngOnInit() {

  }

}
