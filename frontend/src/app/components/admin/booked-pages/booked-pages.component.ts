
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booked-page',
  templateUrl: './booked-pages.component.html',
  styleUrls: ['./booked-pages.component.css']
})
export class BookedPageComponent implements OnInit {
  bookedSchedules: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    this.fetchBookedSchedules();
  }

  fetchBookedSchedules() {
    
    const apiUrl = 'https://your-backend-api/booked-schedules';

    this.http.get(apiUrl).subscribe((data: any) => {
      this.bookedSchedules = data;
    });
  }

  updateDetailsAndPaymentStatus(scheduleId: number, updatedDetails: any, updatedPaymentStatus: string) {
   
    const updateApiUrl = `https://your-backend-api/update-schedule/${scheduleId}`;

    this.http.put(updateApiUrl, { details: updatedDetails, paymentStatus: updatedPaymentStatus })
      .subscribe((response: any) => {
      
        console.log('Schedule updated successfully:', response);

        
        this.fetchBookedSchedules();
      }, error => {
       
        console.error('Error updating schedule:', error);
      });
  }
}
