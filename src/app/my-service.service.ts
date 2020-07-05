import { Injectable } from '@angular/core';
import { data } from 'data';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  hello(){
    console.log("hello");
    return "hi";
  }
  public jsonData = data;
  public populationArr = [];
  public yearArr =[]
  constructor() {
    this.populationArr = this.jsonData.map((data)=>{return data['population']});
    console.log(this.populationArr);
    this.yearArr = this.jsonData.map((data)=>{return data['year']});
   }
}
