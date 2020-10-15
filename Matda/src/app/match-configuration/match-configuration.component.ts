import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-match-configuration',
  templateUrl: './match-configuration.component.html',
  styleUrls: ['./match-configuration.component.scss']
})
export class MatchConfigurationComponent implements OnInit {

  size: number;
  selected: string;
  time: number;
  constructor(private router: Router, private timer: TimerService) { }

  ngOnInit(): void {
    this.size = 14;
    this.selected = 'easy';
    this.time = 25;
  }
  changeDifficulty(difficulty: string){
    this.selected = difficulty;
  }
  modifyTimer(operation: string){
    if(operation == 'add'){
      this.time += 5;
    }
    else{
      this.time -= 5;
    }
  }
  onStart(){
    this.router.navigate(['/match-process']);
    this.timer.setTimer(this.time);
  }
}
