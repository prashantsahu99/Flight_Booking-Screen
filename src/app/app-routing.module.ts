import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingScreenComponent } from './booking-screen/booking-screen.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:"",redirectTo:"/SignIn",pathMatch:"full"},
  {path:"SignIn",component:SignInComponent},
  {path:"Flight_Booking",component:BookingScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
