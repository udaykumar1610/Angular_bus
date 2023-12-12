import { Component } from '@angular/core';

@Component({
  selector: 'app-bus-booking',
  templateUrl: './bus-booking.component.html',
  styleUrls: ['./bus-booking.component.css']
})
export class BusBookingComponent {
 
  
    busNumber: any = '';
    busName: string = '';
    departureDate: string = '';
    source: string = '';
    destination: string = '';
    date:string='';
    availableBuses: any[] = []; 
  
    bookBus() {
     
      const bookedBus = {
        busNumber: this.busNumber,
        name: this.busName,
        departureDate: this.departureDate,
        source: this.source,
        
        destination: this.destination
      };
  
     
      this.availableBuses.push(bookedBus);
  
     
      this.resetForm();
    }
  
    resetForm() {
      this.busNumber=''
      this.busName = '';
      this.departureDate = '';
      this.source = '';
      this.destination = '';
      
    }
  }
  

