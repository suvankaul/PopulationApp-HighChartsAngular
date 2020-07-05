import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
@NgModule({
   declarations: [
      AppComponent,
      HighchartsChartComponent    
   ],
   imports: [
      BrowserModule,
      ChartModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }