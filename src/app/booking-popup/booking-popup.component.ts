import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-popup',
  templateUrl: './booking-popup.component.html',
  styleUrls: ['./booking-popup.component.css']
})
export class BookingPopupComponent implements OnInit {

  

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialog:MatDialog) {}
  
  pay(){
    alert("Flight Booked Successfully");
    this.dialog.closeAll();
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
