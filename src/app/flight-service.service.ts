import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor() { }
  
  getUserDetail(){
    return{"username":"Admin",
    "password":"Admin@123"}
  }

  getFlightData(){
    return[
      {
        "flight_name":"Vistara",
        "logo":"../../assets/vistara-logo.png",
        "From":"New Delhi, India",
        "From_Code":"DEL",
        "destination":"Mumbai, India",
        "dest_Code":"BOM",
        "dept_time":new Date("0000-01-05T17:45"),
        "arrival_time":new Date("0000-01-05T20:05"),
        "price":6253,
        "emi":2085,
        "duration":new Date("0000-01-05T02:20")
      },{
        "flight_name":"Spicejet",
        "logo":"../../assets/spicejet-logo.png",
        "From":"New Delhi, India",
        "From_Code":"DEL",
        "destination":"Mumbai, India",
        "dest_Code":"BOM",
        "dept_time":new Date("0000-01-05T08:35"),
        "arrival_time":new Date("0000-01-05T20:50"),
        "price":7776,
        "emi":2592,
        "duration":new Date("0000-01-05T02:15")
      },{
        "flight_name":"Spicejet",
        "logo":"../../assets/spicejet-logo.png",
        "From":"New Delhi, India",
        "From_Code":"DEL",
        "destination":"Mumbai, India",
        "dest_Code":"BOM",
        "dept_time":new Date("0000-01-05T19:45"),
        "arrival_time":new Date("0000-01-05T12:05"),
        "price":5776,
        "emi":2592,
        "duration":new Date("0000-01-05T01:20")
      }
    ]
  }
}
