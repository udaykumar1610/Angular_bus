import { Component, OnInit } from '@angular/core';
import { BusScheduleService } from 'src/app/bus-schedule.service';

@Component({
  selector: 'app-busschedule',
  templateUrl: './busschedule.component.html',
  styleUrls: ['./busschedule.component.css']
})
export class BusscheduleComponent implements OnInit{

  schedules: any[] = [];

  constructor(private busScheduleService: BusScheduleService) {}

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules() {
    this.busScheduleService.getAllSchedules().subscribe(schedules => {
      this.schedules = schedules;
    });
  }

  addSchedule(schedule: any) {
    this.busScheduleService.addSchedule(schedule).subscribe(() => {
      this.loadSchedules();
    });
  }

  updateSchedule(schedule: any) {
    this.busScheduleService.updateSchedule(schedule).subscribe(() => {
      this.loadSchedules();
    });
  }

  deleteSchedule(scheduleId: number) {
    this.busScheduleService.deleteSchedule(scheduleId).subscribe(() => {
      this.loadSchedules();
    });
  }
}
