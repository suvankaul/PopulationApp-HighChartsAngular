import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { data } from 'data';
import { MyServiceService } from './my-service.service'
import { from } from 'rxjs';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   providers : [MyServiceService]
})
export class AppComponent {
  title : string;
  public lineChart;
  public areaChart;
  public inter;

  public jsonData = [];
  public yearArr = [];
  public populationArr = [];
   
  constructor(private _myService:MyServiceService){

   this.jsonData = data;
   this.title = this._myService.hello();
   this.yearArr = this._myService.yearArr;
   this.populationArr = this._myService.populationArr
   console.log(this.yearArr);
   console.log(this.populationArr);
    
   this.drawLine();
   this.drawArea();
   this.inter = setInterval(()=>{
      let year = parseInt(this.yearArr[this.yearArr.length-1]) + 1;
      let nextyear = year.toString();
      this.yearArr.push(nextyear);
      this.populationArr.push((Math.floor(Math.random()* ((10-1)+1))));
      this.drawArea();
      this.drawLine();    
      } , 5000);
   }
   stop(){
      let that = this;
      clearInterval(that.inter);
   }

  drawLine(){
      this.lineChart = new Chart({
        chart: {
          type: 'line',
        },
        title: {
          text: "Yearly Population Census"
        },
        credits: {
          enabled: false
        },
        xAxis:{
          categories:this.yearArr,
          title : {
              text : "year"
          }
        },
        yAxis: {          
          title:{
              text:"Population"
          } 
        },
        series: [
          {
              name: 'Tokyo',
              data: this.populationArr,
              type: "line"
          },     
        ]
      });
  }
  drawArea(){
    this.areaChart = new Chart({   
      chart: {
         type: 'area'
      },
      title: {
         text: 'Yearly Population Census'
      },
      subtitle : {
         style: {
            position: 'absolute',
            right: '0px',
            bottom: '10px'
         }
      },
      legend : {
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: -150,
         y: 100,
         floating: true,
         borderWidth: 1
      },
      xAxis:{
         categories: this.yearArr
      },
      yAxis : {
         title: {
            text: 'Population'
         },
      },
      tooltip : {
         formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
               this.x + ': ' + this.y;
         }
      },
      plotOptions : {
         area: {
            fillOpacity: 0.5 
         }
      },
      credits:{
         enabled: false
      },
      series: [
         {
            name: 'Tokyo',
            data: this.populationArr,
            type : "area"
         }
      ]
   });
  }  
 

   
}