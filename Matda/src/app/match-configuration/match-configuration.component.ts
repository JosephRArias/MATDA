import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-configuration',
  templateUrl: './match-configuration.component.html',
  styleUrls: ['./match-configuration.component.scss']
})
export class MatchConfigurationComponent implements OnInit {

  size: number;
  selected: string;
  timer: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.size = 14;
    this.selected = 'easy';
    this.timer = 25;
  }
  changeDifficulty(difficulty: string){
    this.selected = difficulty;
  }
  modifyTimer(operation: string){
    if(operation == 'add'){
      this.timer += 5;
    }
    else{
      this.timer -= 5;
    }
  }
  onStart(){
    this.router.navigate(['/match-process']);
  }
}
