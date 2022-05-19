import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-booking-screen',
  templateUrl: './booking-screen.component.html',
  styleUrls: ['./booking-screen.component.css']
})
export class BookingScreenComponent implements OnInit {

  flightDetail:any=[];
  path:string="";

  constructor(private details:FlightServiceService ) {
    this.flightDetail=this.details.getFlightData();
    // this.path=this.flightDetail.logo;
   }

  ngOnInit(): void {
  }

  sortByDeparture(){
    
  }
  sortByDuration(){
    
  }
  sortByArrival(){
    
  }
  sortByPrice(){
    // this.flightDetail.sort((a, b) => (a.price > b.price) ? 1 : -1)
    
  }


}
