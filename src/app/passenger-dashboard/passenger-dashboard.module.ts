import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dahboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
  exports: [PassengerDashboardComponent],
  imports: [CommonModule]
})
export class PassengerDashboardModule {

}
