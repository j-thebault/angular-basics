import { Passenger } from './model/passenger.interface';

export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
    return [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        children: [{ name: 'Todd', age: 12 }, { name: 'Titi', age: 15 }]
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true
      },
      {
        id: 4,
        fullname: 'Louise',
        checkedIn: true
      }
    ];
  }
}
