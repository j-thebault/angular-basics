import { Passenger } from './model/passenger.interface';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const PASSENGER_API = '/api/passengers';
@Injectable()
export class PassengerDashboardService {


  constructor(private http: HttpClient) {
    console.log(http);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API);
  }
}
