

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookedPageService {
  private bookedSchedules: any[] = [
    { id: 1, passengerName: 'John Doe', departureDate: '2023-04-27', source: 'Delhi', destination: 'Bangalore', paymentStatus: 'Paid' },
    { id: 2, passengerName: 'Lokesh', departureDate: '2023-12-06', source: 'Pune', destination: 'Tamil Nadu', paymentStatus: 'paid' },
    { id: 3, passengerName: 'Kalyan', departureDate: '2023-12-05', source: 'Hyderabad', destination: 'Tamil Nadu', paymentStatus: 'paid' },
    { id: 4, passengerName: 'Pavan', departureDate: '2023-08-25', source: 'Bangalore', destination: 'Mumbai', paymentStatus: 'paid' },
    { id: 5, passengerName: 'Aravind', departureDate: '2023-06-05', source: 'Delhi', destination: 'Tamil Nadu', paymentStatus: 'Pending' },
    
  ];

  getBookedSchedules(): Observable<any[]> {
    return of(this.bookedSchedules);
  }

  updateSchedule(updatedSchedule: any): Observable<any> {
    const index = this.bookedSchedules.findIndex(schedule => schedule.id === updatedSchedule.id);
    if (index !== -1) {
      this.bookedSchedules[index] = { ...this.bookedSchedules[index], ...updatedSchedule };
      return of({ success: true });
    } else {
      return of({ success: false, message: 'Schedule not found' });
    }
  }

  deleteSchedule(scheduleId: number): Observable<any> {
    const index = this.bookedSchedules.findIndex(schedule => schedule.id === scheduleId);
    if (index !== -1) {
      this.bookedSchedules.splice(index, 1);
      return of({ success: true });
    } else {
      return of({ success: false, message: 'Schedule not found' });
    }
  }
}
