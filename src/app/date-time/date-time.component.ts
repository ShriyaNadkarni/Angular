import { Component, OnInit, ViewRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  currentDateTime: string | any;
  cdr: any;


 
  getHourTransform(): string {
    const hours = new Date().getHours() % 12;
    const degrees = (hours * 30) + 90; // 30 degrees per hour, starting at 90 degrees
    return `rotate(${degrees}deg)`;
  }

  getMinuteTransform(): string {
    const minutes = new Date().getMinutes();
    const degrees = (minutes * 6) + 90; // 6 degrees per minute, starting at 90 degrees
    return `rotate(${degrees}deg)`;
  }

  getSecondTransform(): string {
    const seconds = new Date().getSeconds();
    const degrees = (seconds * 6) + 90; // 6 degrees per second, starting at 90 degrees
    return `rotate(${degrees}deg)`;
  }

  private updateClock(): void {
    if (!(this.cdr as ViewRef).destroyed) {
      this.cdr.detectChanges();
    }
  }

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    setInterval(() => {
      this.updateClock();
    }, 1000);



    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  private updateDateTime() {
    const now = new Date().toString();
    this.currentDateTime = this.datePipe.transform(now, 'medium');
  }
} 
