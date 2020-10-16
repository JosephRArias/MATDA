import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { FirebaseService } from '../services/firebase.service';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-operation-screen',
  templateUrl: './operation-screen.component.html',
  styleUrls: ['./operation-screen.component.scss']
})
export class OperationScreenComponent implements OnInit {
  selected = this.route.snapshot.params.op;
  time : number;
  exercise: any;
  refreshInterval: any;
  separated: any;
  dare: any;
  constructor(public timer : TimerService, private route: ActivatedRoute, public fb: FirebaseService) { }
  ngOnInit(): void {
    this.timer.startTimer();
    this.fb.getExercisesLength(this.fb.sign);
    this.refreshInterval = setInterval(()=>{
      if(this.exercise==undefined){
        this.fb.getExercise().subscribe(res=>{
          this.exercise = res;
          this.ReplaceStrings();
        });
      }else{
        clearInterval(this.refreshInterval);
      }
    },1000);
    /*.subscribe(res=>{
      console.log(res);
    });*/
  }
  ReplaceStrings(){
    if(this.fb.sign != 'reto'){
      this.separated = this.exercise.split(' ');
      console.log(this.separated);
    }
    else{
      this.dare = this.exercise;
    }
  }

}
