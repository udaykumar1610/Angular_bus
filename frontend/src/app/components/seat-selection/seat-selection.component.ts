import { Component } from '@angular/core';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {
 
  
    seatRows: string[][] = [
      ['1', '2', '3', '4'],
      ['5', '6', '7', '8'],
      ['9', '10', '11', '12'],
      ['13', '14', '15', '16'],
      ['17', '18', '19', '20'],
      ['21', '22', '23', '24'],
      ['25', '26', '27', '28'],
      ['29', '30', '30', '31'],
     
    ];
  
    selectedSeats: { row: number; seat: number }[] = [];
  
    get selectedSeatCount(): number {
      return this.selectedSeats.length;
    }
  
    isSeatSelected(row: number, seat: number): boolean {
      return this.selectedSeats.some(s => s.row === row && s.seat === seat);
    }
  
    toggleSeat(row: number, seat: number): void {
      const seatIndex = this.selectedSeats.findIndex(s => s.row === row && s.seat === seat);
  
      if (seatIndex !== -1) {
       
        this.selectedSeats.splice(seatIndex, 1);
      } else {
        
        this.selectedSeats.push({ row, seat });
      }
    }
  
    bookSeats(): void {
     
      console.log('Selected Seats:', this.selectedSeats);
    }
  }
  