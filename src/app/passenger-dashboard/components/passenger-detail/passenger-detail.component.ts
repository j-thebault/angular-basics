import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Passenger} from '../../model/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  styleUrls: ['./passenger-detail.scss'],
  template: `
    <div style="margin-top:10px">
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input type="text" [value]="detail.fullname" (input)="onNameChanged(name.value)" #name>
      </div>
      <div *ngIf="!editing">
        {{detail.fullname}}
      </div>
      <div class="date">
        Check in Date :
        {{detail.checkedIn ? (detail.checkInDate | date: 'y MMMM dd') : 'Not Check In'}}
      </div>
      <button (click)="toggleEdit()">
        {{editing ? 'Done' : 'Edit' }}
      </button>

      <button (click)="onRemove()">
        Remove
      </button>

      <button (click)="goToPassenger()">
        View
      </button>
    </div>
  `
})
export class PassengerDetailComponent implements OnInit, OnChanges {

  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter();

  editing = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onNameChanged(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
}

