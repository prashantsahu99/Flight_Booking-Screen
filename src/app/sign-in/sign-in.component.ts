import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userdetails:any ={};
  constructor(private router:Router,private details:FlightServiceService) {
    this.userdetails=details.getUserDetail();
   }
  
  show=false;
  display=false;

  @ViewChild ('SignIn') SignIn!:NgForm
  Sign !:User

  
  

  ngOnInit(): void {
    this.Sign={username:'',password:''}
  }
  submitForm(){
    if(this.SignIn.valid){
      if(this.Sign.username===this.userdetails.username && this.Sign.password===this.userdetails.password){
      console.log(this.SignIn.value);
      this.display=false;
      this.show=true;
      this.router.navigate(['/Flight_Booking']);
      this.SignIn.resetForm();
      }
      else{
        this.show=false;
        this.display=true;
      }
    }
  }

}
