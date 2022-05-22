import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-popup',
  templateUrl: './booking-popup.component.html',
  styleUrls: ['./booking-popup.component.css']
})
export class BookingPopupComponent implements OnInit {

  

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { 
    
  }
  pay(){
    alert("Flight Booked Successfully");
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
