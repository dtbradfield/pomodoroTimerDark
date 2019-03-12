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

  timerMessageStart: string = "Start your timer!";

  timerMessageStop: string = "Stop your timer!";

  revealAbout: boolean = false;

  timer = setInterval(() => {
    if (this.timerStarted && this.timerMinutes !== 0) this.timerMinutes--;
    if (this.timerMinutes === 0) {
      clearInterval(this.timer);
      alert('Time expired!');
    }
  }, 1000);
  

  timerMode() {
    this.keepingTime = !this.keepingTime;
    this.timerStarted = !this.timerStarted;
  }

  constructor() { }

  ngOnInit() {
  }

  onStartTimer() {
    this.timer;
    this.timerMode();
  }

  onResetTimer() {
    confirm("You sure you wanna reset?");
    if (this.keepingTime) {
      this.timerMode();
      this.timerMinutes = 25;
    } else {
      this.timerMinutes = 25;
    }
  }

}
