import { Component } from '@angular/core';

@Component({
  selector: 'app-bus-booking-list',
  templateUrl: './bus-booking-list.component.html',
  styleUrls: ['./bus-booking-list.component.css']
})
export class BusBookingListComponent {
 


  bookedBuses: any[] = [];
  ngOnInit() {
    this.bookedBuses = [
      { id: 1, name: 'Orange Travellers', departureDate: '2023-12-15', source: 'Hyderabad', destination: 'Mumbai' },
      { id: 2, name: ' Apstrc', departureDate: '2023-12-16', source: 'Pune', destination: 'Chennai' },
      { id: 3, name: 'Tsrtc', departureDate: '2023-12-15', source: 'Mumbai', destination: 'Delhi' },
      { id: 4, name: 'Volvo Travellers', departureDate: '2023-12-16', source: 'Punjab', destination: 'Bangalore' },
      { id: 5, name: 'Abhi Travellers', departureDate: '2023-12-15', source: 'Chennai', destination: 'Hyderabad' },
      { id: 6, name: 'Aprtc', departureDate: '2023-12-16', source: 'bangalore', destination: 'Chennai' },
      
    ];
  }

  editBus(bus: any) {
  
    console.log('Edit Bus:', bus);
  }

  deleteBus(bus: any) {
   
    this.bookedBuses = this.bookedBuses.filter(b => b.id !== bus.id);
  }
  getBusById(busId: number): any {
    return this.bookedBuses.find(bus => bus.id === busId);
  }
}



