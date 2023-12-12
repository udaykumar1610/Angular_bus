// bus-schedule.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusScheduleService {
  private schedules: any[] = [];

  getAllSchedules(): Observable<any[]> {
    return of(this.schedules);
  }

  addSchedule(schedule: any): Observable<any> {
    this.schedules.push(schedule);
    return of(schedule);
  }

  updateSchedule(updatedSchedule: any): Observable<any> {
    const index = this.schedules.findIndex(schedule => schedule.id === updatedSchedule.id);

    if (index !== -1) {
      this.schedules[index] = updatedSchedule;
      return of(updatedSchedule);
    } else {
      return of(null); 
    }
  }


  deleteSchedule(scheduleId: number): Observable<any> {
    const index = this.schedules.findIndex(schedule => schedule.id === scheduleId);

    if (index !== -1) {
      this.schedules.splice(index, 1);
      return of({}); 
    } else {
      return of(null); 
    }
  }
}
