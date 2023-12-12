

import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';
 
@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent {
  tasks: any[];
  newTask: any = {};
  editedTask: any = {};
  showRescheduleModal = false;
 
 
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }
 
  openRescheduleModal(task: any): void {
    this.editedTask = { ...task };
    this.showRescheduleModal = true;
  }
 
  closeRescheduleModal(): void {
    this.showRescheduleModal = false;
    this.editedTask = {};
  }
 
  rescheduleTask(): void {
    this.taskService.updateTask(this.editedTask);
    this.closeRescheduleModal();
  }
 
 
 
 
 
 
}
 
 