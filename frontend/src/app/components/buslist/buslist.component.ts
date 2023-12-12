// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-buslist',
//   templateUrl: './buslist.component.html',
//   styleUrls: ['./buslist.component.css']
// })
// export class BuslistComponent {

// }

import { Component, OnInit } from '@angular/core';
 
interface Bus {
  busName: string;
  busNumber: string;
  startPlace: string;
  destinationPlace: string;
}
 
@Component({
  selector: 'app-bus-management',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {
  buses: Bus[] = [
 
   
    { busName: 'PPRT', busNumber: 'KRTC456', startPlace: 'Bangalore', destinationPlace: 'Hyderabad',  },
    { busName: 'KRTT', busNumber: 'KRTC456', startPlace: 'Hyderabad', destinationPlace: 'Bangalore',  },
    { busName: 'KRTC', busNumber: 'KRTC456', startPlace: 'Bangalore', destinationPlace: 'Hyderabad',  },
    { busName: 'WBTC', busNumber: 'KRTC456', startPlace: 'Kolkata', destinationPlace: 'Mumbai',  },
    { busName: 'MHRTC', busNumber: 'RJ123', startPlace: 'Pune', destinationPlace: 'Mumbai',  },
    { busName: 'UPRTC', busNumber: 'RJ123', startPlace: 'Delhi', destinationPlace: 'Gaziabad',  },
    { busName: 'BABATC', busNumber: 'RJ123', startPlace: 'Hyderabad', destinationPlace: 'Bangalore', },
    { busName: 'Rajadhani', busNumber: 'RJ123', startPlace: 'Hyderabad', destinationPlace: 'Bangalore',  },
    { busName: 'BTC',busNumber: 'RJ123', startPlace: 'Patna', destinationPlace: 'Delhi', },
    // Your bus data here
  ];
 
  model: Bus = { busName: '', busNumber: '', startPlace: '', destinationPlace: '' };
  editingIndex: number | null = null;
  searchTerm: string = '';
  isAddingOrEditing = false;
 
  addBusSuccess: boolean = false;
  editBusSuccess: boolean = false;
  deleteBusSuccess: boolean = false;
 
  ngOnInit() {
    // Initialize alerts to false
    this.addBusSuccess = false;
    this.editBusSuccess = false;
    this.deleteBusSuccess = false;
  }
 
  onSubmit() {
    if (this.editingIndex !== null) {
      // Editing existing bus
      this.buses[this.editingIndex] = { ...this.model };
      this.editBusSuccess = true;
    } else {
      // Adding new bus
      this.buses.push({ ...this.model });
      this.addBusSuccess = true;
    }
 
    this.resetForm();
    this.hideAlertsAfterDelay();
  }
 
  onAddEditToggle() {
    this.isAddingOrEditing = !this.isAddingOrEditing;
    this.resetForm();
    this.hideAlertsAfterDelay();
  }
 
  editBus(index: number) {
    this.isAddingOrEditing = true;
    this.editingIndex = index;
    this.model = { ...this.buses[index] };
  }
 
  deleteBus(index: number) {
    this.buses.splice(index, 1);
    this.deleteBusSuccess = true;
 
    if (this.editingIndex === index) {
      this.editingIndex = null;
      this.resetForm();
    }
 
    this.hideAlertsAfterDelay();
  }
 
  get filteredBuses(): Bus[] {
    // Your filteredBuses logic here
    return this.buses.filter(bus =>
      bus.busName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      bus.busNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      bus.startPlace.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      bus.destinationPlace.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
 
  private resetForm() {
    this.model = { busName: '', busNumber: '', startPlace: '', destinationPlace: '' };
    this.editingIndex = null;
  }
 
  private hideAlertsAfterDelay() {
    // Hide alerts after 3 seconds
    setTimeout(() => {
      this.addBusSuccess = false;
      this.editBusSuccess = false;
      this.deleteBusSuccess = false;
    }, 3000);
  }
}
 