import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
