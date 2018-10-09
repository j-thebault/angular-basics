import { Passenger } from './model/passenger.interface';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

const PASSENGER_API = '/api/passengers';
@Injectable()
export class PassengerDashboardService {


  constructor(private http: HttpClient) {
    console.log(http);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API);
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${PASSENGER_API}/${id}`);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger);
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<any>(`${PASSENGER_API}/${passenger.id}`, httpOptions)
    .pipe(
      map(x => passenger)
    );
  }
}
