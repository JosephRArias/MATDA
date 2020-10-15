import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-operation-screen',
  templateUrl: './operation-screen.component.html',
  styleUrls: ['./operation-screen.component.scss']
})
export class OperationScreenComponent implements OnInit {
  selected : string;
  time : number;
  constructor(public timer : TimerService) { }

  ngOnInit(): void {
    this.selected = 'SR';
    this.timer.startTimer();
  }

}
