import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dahboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerViewerComponent } from './components/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent,
    PassengerDetailComponent, PassengerViewerComponent, PassengerFormComponent],
  providers : [PassengerDashboardService],
  exports: [PassengerDashboardComponent, PassengerViewerComponent],
  imports: [CommonModule, HttpClientModule]
})
export class PassengerDashboardModule {

}
