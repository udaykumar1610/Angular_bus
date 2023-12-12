


import { Component, OnInit } from '@angular/core';
import { BookedPageService } from 'src/app/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-bookedpage',
  templateUrl: './bookedpage.component.html',
  styleUrls: ['./bookedpage.component.css']
})
export class BookedPageComponent implements OnInit {
  bookedSchedules: any[] = [];

  constructor(private bookedPageService: BookedPageService, private modalService: NgbModal) { }

  ngOnInit() {
    this.fetchBookedSchedules();
  }

  fetchBookedSchedules() {
    this.bookedPageService.getBookedSchedules().subscribe(
      (schedules) => {
        this.bookedSchedules = schedules;
      },
      (error) => {
        console.error('Error fetching booked schedules:', error);
      }
    );
  }

  updateSchedule(updatedSchedule: any) {
    this.bookedPageService.updateSchedule(updatedSchedule).subscribe(
      (response) => {
        if (response.success) {
          console.log('Schedule updated successfully');
        } else {
          console.error('Failed to update schedule:', response.message);
        }
      },
      (error) => {
        console.error('Error updating schedule:', error);
      }
    );
  }

  deleteSchedule(scheduleId: number) {
    this.bookedPageService.deleteSchedule(scheduleId).subscribe(
      (response) => {
        if (response.success) {
          console.log('Schedule deleted successfully');
          this.fetchBookedSchedules(); // Refresh the list after deletion
        } else {
          console.error('Failed to delete schedule:', response.message);
        }
      },
      (error) => {
        console.error('Error deleting schedule:', error);
      }
    );
  }


}


