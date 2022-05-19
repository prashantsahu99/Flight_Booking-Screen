import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor() { }
  getFlightData(){
    return[
      {
        "flight_name":"Vistara",
        "logo":"../../assets/vistara-logo.png",
        "From":"New Delhi, India",
        "From_Code":"DEL",
        "destination":"Mumbai, India",
        "dest_Code":"BOM",
        "dept_time":"17:45",
        "arrival_time":"20:05",
        "price":6253,
        "emi":2085,
        "duration":"2h 20m"
      },{
        "flight_name":"Spicejet",
        "logo":"../../assets/spicejet-logo.png",
        "From":"New Delhi, India",
        "From_Code":"DEL",
        "destination":"Mumbai, India",
        "dest_Code":"BOM",
        "dept_time":"18:35",
        "arrival_time":"20:50",
        "price":7776,
        "emi":2592,
        "duration":"2h 15m"
      },{
        "flight_name":"Spicejet",
        "logo":"../../assets/spicejet-logo.png",
        "From":"New Delhi, India",
        "From_Code":"DEL",
        "destination":"Mumbai, India",
        "dest_Code":"BOM",
        "dept_time":"19:45",
        "arrival_time":"22:05",
        "price":7776,
        "emi":2592,
        "duration":"2h 20m"
      }
    ]
  }
}
