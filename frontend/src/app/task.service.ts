import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    { id: 1,busno:'120', name: 'Rajadhani', from:'Hyderbad',to:'Bangalore',date: '2023-01-04', time:'11:30'},
    { id: 2,busno:'121', name: 'Orange', from:'Bangalore',to:'Chennai',date: '2023-02-01', time:'09:35'},
    { id: 3,busno:'122', name: 'Orange', from:'Chennai',to:'Mumbai',date: '2023-02-24', time:'17:30'},
    { id: 4,busno:'123', name: 'Rajadhani', from:'Mumbai',to:'Bangalore',date: '2023-01-01', time:'21:10'},
    { id: 5,busno:'124', name: 'TSRTC', from:'Hyderbad',to:'Bangalore',date: '2023-01-18', time:'17:50'},
    { id: 6,busno:'125', name: 'TSRTC', from:'Delhi',to:'Hyderabad',date: '2023-03-09', time:'06:15'},
    { id: 7,busno:'126', name: 'Rajadhani', from:'Mumbai',to:'Bangalore',date: '2023-01-11', time:'04:30'},
   
  ];
 
  getTasks(): any[] {
    return this.tasks;
  }
 
 
 
  updateTask(updatedTask: any): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
 
 
 
  private generateId(): number {
    return Math.max(...this.tasks.map((task) => task.id), 0) + 1;
  }
}
