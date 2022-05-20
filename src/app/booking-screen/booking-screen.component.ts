import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-booking-screen',
  templateUrl: './booking-screen.component.html',
  styleUrls: ['./booking-screen.component.css']
})
export class BookingScreenComponent implements OnInit {

  flightDetail:any=[];

  constructor(private details:FlightServiceService ) {
    this.flightDetail=this.details.getFlightData();
   }

  ngOnInit(): void {new Date("0000-01-05T17:45")
    
  }

  sortByDeparture(){
    this.flightDetail.sort((first: any, second: any) => (first.dept_time <second.dept_time ? -1: 1));
  }
  sortByDuration(){
    this.flightDetail.sort((first: any, second: any) => (first.duration <second.duration ? -1: 1));
  }
  sortByArrival(){
    this.flightDetail.sort((first: any, second: any) => (first.arrival_time <second.arrival_time ? -1: 1));
  }
  sortByPrice(){
    this.flightDetail.sort((first: any, second: any) => (first.price <second.price ? -1: 1));
  }


}
