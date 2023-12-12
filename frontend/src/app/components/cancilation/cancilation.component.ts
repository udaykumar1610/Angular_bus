


import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cancilation',
  templateUrl: './cancilation.component.html',
  styleUrls: ['./cancilation.component.css']
})
export class CancilationComponent {

 
    tasks = [
      { busno :'120',bus:'Rajadhani',from: 'Hyderabad',to:'Chennai', date: '2023-01-01', time:'06:10' },
      { busno :'121',bus:'Garuda',from: 'Bangalore',to:'Hyderabad', date: '2023-02-04', time:'10:15' },
      { busno :'122',bus:'TSRTC',from: 'Chennai',to:'Bangalore', date: '2023-03-07', time:'08:25' },
      { busno :'123',bus:'TSRTC',from: 'Delhi',to:'Mumbai', date: '2023-01-11', time:'09:45' },
      { busno :'124',bus:'Orange',from: 'Mumbai',to:'Hyderabad', date: '2023-02-21', time:'17:00' },
      // Add more tasks as needed
    ];
 
   
    showDeleteAlert = false;
    selectedTask: any;
    newDate: string = '';
 
   
 
   
 
    deleteTask(index: number): void {
      this.selectedTask = this.tasks[index];
      this.showDeleteAlert = true;
    }
 
    deleteConfirmed(): void {
      // Add your delete logic here
      if (this.selectedTask) {
        const index = this.tasks.indexOf(this.selectedTask);
        if (index !== -1) {
          this.tasks.splice(index, 1);
        }
        this.closeDeleteAlert();
      }
    }
 
    closeDeleteAlert(): void {
      this.showDeleteAlert = false;
      this.selectedTask = null;
    }
  }
 