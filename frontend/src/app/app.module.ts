import { NgModule, isStandalone, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { ROUTES, Route, RouterModule, Routes, provideRouter } from '@angular/router';
import { Path } from 'mongoose';
import { BusBookingComponent } from './components/bus-booking/bus-booking.component';
import { FormsModule } from '@angular/forms';
import { BusBookingListComponent } from './components/bus-booking-list/bus-booking-list.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminnavbarComponent } from './components/admin/adminnavbar/adminnavbar.component';
import { AdminbookingComponent } from './components/admin/adminbooking/adminbooking.component';
import { BuslistComponent } from './components/buslist/buslist.component';
import { CancilationComponent } from './components/cancilation/cancilation.component';
import { RescheduleComponent } from './components/reschedule/reschedule.component';
import { HistoryComponent } from './components/history/history.component';

import { BusScheduleService } from './bus-schedule.service';
import { BusscheduleComponent } from './components/admin/busschedule/busschedule.component';
import { TaskService } from './task.service';
import { BookedPageComponent } from './components/admin/bookedpage/bookedpage.component';
import { BookedPageService } from './booking.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { RegisterComponent } from './components/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient} from '@angular/common/http';



const appRoutes:Routes=[
  
  {path:'navbar',component:HomeComponent},
 {path:'home',component:HomeComponent},
 {path:'busbooking',component:BusBookingComponent},
  {path:'buslist',component:BusBookingListComponent},
  {path:'seat',component:SeatSelectionComponent},
  {path:'payment',component:PaymentComponent},  
  //{path:'register',component:RegistrationComponent},  
  {path:'login',component:LoginComponent},  
  {path:'adnav',component:AdminnavbarComponent},
  {path:'adbook',component:AdminbookingComponent},
  {path:'list',component: BuslistComponent},
  {path:'cancel',component: CancilationComponent},
  {path:'reschedule',component: RescheduleComponent},
  {path:'history',component: HistoryComponent},
  {path:'busschedule',component: BusscheduleComponent},
  {path:'bookedpage',component: BookedPageComponent},
  {path:'feedback',component: FeedbackComponent},
  {path:'register',component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    HomeComponent,
    BusBookingComponent,
    BusBookingListComponent,
    SeatSelectionComponent,
    AddBusComponent,
    PaymentComponent,
    RegistrationComponent,
    LoginComponent,
    AdminnavbarComponent,
    AdminbookingComponent,
    BuslistComponent,
    CancilationComponent,
    RescheduleComponent,
    HistoryComponent,
    BusscheduleComponent,
    BookedPageComponent,
    FeedbackComponent,
    RegisterComponent
   
   
   
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule

  
  ],
  providers: [BusScheduleService,
  TaskService,
  BookedPageService ,
  provideHttpClient(),

],
  // bootstrap: [AdminnavbarComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
