import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  keepingTime: boolean = false;
  timerMinutes: number = 25;
  timerStarted: boolean = false;
  timerMessageStart: string = "Start your timer!"
  timerMessageStop: string = "Stop your timer!"

  timerMode() {
    this.keepingTime = !this.keepingTime;
    this.timerStarted = !this.timerStarted;
  }

  constructor() { }

  ngOnInit() {
  }

  onStartTimer() {
    this.timerMode();
  }

  onResetTimer() {
    this.timerMode();
  }

}
