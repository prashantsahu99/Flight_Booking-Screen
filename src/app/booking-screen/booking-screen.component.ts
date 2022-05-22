import { Component, NgModule, OnInit } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingPopupComponent } from '../booking-popup/booking-popup.component';


@Component({
  selector: 'app-booking-screen',
  templateUrl: './booking-screen.component.html',
  styleUrls: ['./booking-screen.component.css']
})
export class BookingScreenComponent implements OnInit {


  
  flightDetail:any=[];

  constructor(private details:FlightServiceService, private dialog:MatDialog ) {
    this.flightDetail=this.details.getFlightData();
   }

  

  ngOnInit(): void {}

  openDialog(item:any){
    this.dialog.open(BookingPopupComponent,{data:item});
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
