import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  
  show=false;
  display=false;

  @ViewChild ('SignIn') SignIn!:NgForm
  Sign !:User

  
  

  ngOnInit(): void {
    this.Sign={username:'',password:''}
  }
  submitForm(){
    if(this.SignIn.valid){
      if(this.Sign.username==="Admin" && this.Sign.password==="Admin@123"){
      console.log(this.SignIn.value);
      this.display=false;
      this.show=true;
      this.SignIn.resetForm();
      }
      else{
        this.show=false;
        this.display=true;
      }
    }
  }

}
