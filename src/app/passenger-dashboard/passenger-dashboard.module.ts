import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Form, FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dahboard.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {PassengerDashboardService} from './passenger-dashboard.service';
import {PassengerViewerComponent} from './components/passenger-viewer/passenger-viewer.component';
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';

const routes: Routes = [
  {path: 'passengers', component: PassengerDashboardComponent}
];

@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent,
    PassengerDetailComponent, PassengerViewerComponent, PassengerFormComponent],
  providers: [PassengerDashboardService],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule.forChild(routes)]
})
export class PassengerDashboardModule {

}
