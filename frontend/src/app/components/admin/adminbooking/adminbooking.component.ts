import { Component } from '@angular/core';

@Component({
  selector: 'app-adminbooking',
  templateUrl: './adminbooking.component.html',
  styleUrls: ['./adminbooking.component.css']
})
export class AdminbookingComponent {

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
