import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-chartjs';
import { DisqusModule } from 'angular2-disqus';
import { RouterModule } from '@angular/router';


// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

// Services
import { SalaryDataComponent } from './salary-data/salary-data.component';
import { PagingService, SalaryDataService, SalaryStatisticsService } from './services';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SalaryDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    DisqusModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'salary-data', component: SalaryDataComponent },
    ])
  ],
  providers: [
    PagingService,
    SalaryDataService,
    SalaryStatisticsService,
    [{provide: LocationStrategy, useClass: HashLocationStrategy}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
