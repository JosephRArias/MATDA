import { Component, OnInit, ViewChildren } from '@angular/core';
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
  resultado2 = 0;
  time: number;
  exercise: any;
  refreshInterval: any;
  TimeOutInterval: any;
  separated: any;
  @ViewChildren('numberDiv') numberDiv;
  arrayLength = 0;
  counter = 0;
  resultado = 0;
  correct: boolean;
  dare: any;
  sign: any;
  operand: number;
  constructor(public timer: TimerService, private route: ActivatedRoute, public fb: FirebaseService) { }
  ngOnInit(): void {
    this.timer.startTimer();
    this.fb.getExercisesLength(this.fb.sign);
    this.refreshInterval = setInterval(() => {
      if (this.exercise == undefined) {
        this.fb.getExercise().subscribe(res => {
          this.exercise = res;
          this.ReplaceStrings();
        });
      } else {
        this.arrayLength = this.numberDiv.toArray().length;
        clearInterval(this.refreshInterval);
      }
    }, 1000);
    /*.subscribe(res=>{
      console.log(res);
    });*/
    console.log(+(this.timer.timeLeft.toString() + '000'));
    this.TimeOutInterval = setInterval(()=>{
      document.getElementById("overlay2").style.display = "block";
    }, +(this.timer.timeLeft.toString() + '000'));
  }
  ReplaceStrings() {
    if (this.fb.sign != 'reto') {
      this.separated = this.exercise.split(' ');
      console.log(this.separated);
      this.sign = this.separated[1];
      if (this.separated[2] != '_') {
        if (this.sign == '+') {
          this.resultado = +this.separated[2];
          console.log(typeof (this.resultado));
        }
        else if (this.sign == '-') {
          this.resultado = +(-this.separated[2]);
          console.log(typeof (this.resultado));
        }
      }
      else {
        this.resultado2 = +this.separated[4];
        console.log(this.resultado2);
      }
      console.log(this.sign);
    }
    else {
      this.dare = this.exercise;
    }
  }
  getResult(event) {
    console.log(this.counter);
    console.log(this.resultado);
    if (this.sign == '+' && this.counter == 0) {
      if (this.resultado == 0) {
        this.resultado = +event.target.value;
      }
      else {
        this.resultado += +event.target.value;
      }/*
      console.log('Suma');
      console.log(typeof (event.target.value));
      /*console.log(this.resultado);
      this.resultado += event.target.value;*/
      console.log(this.resultado);
    } else if (this.sign == '-' && this.counter == 0) {
      console.log(this.resultado);
      if (this.resultado == 0) {
        this.resultado = +event.target.value;
      }
      else {
        this.resultado += +event.target.value;
      }/*
      console.log('Resta');
      // console.log(-event.target.value);
      console.log(typeof (event.target.value));
      //this.resultado += event.target.value;
      console.log(this.resultado);*/
    }
    this.counter++;
    console.log(this.counter);
    console.log(this.resultado);
    if (this.counter == this.arrayLength) {
      console.log(+event.target.value);
      if(this.resultado2==0){
        this.resultado2 = +event.target.value;
      }
      else{
      this.resultado += +event.target.value;
    }
      console.log(this.resultado);
      console.log(this.resultado2);
      if (this.resultado == this.resultado2) {
        document.getElementById("overlay1").style.display = "block";
      }
      else {
        document.getElementById("overlay2").style.display = "block";
      }
      /*if (this.resultado === +event.target.value) {
        console.log('Resultado Correcto');
        console.log(this.resultado);
        this.correct = true;
        document.getElementById("overlay1").style.display = "block";
        console.log(this.correct);
      }
      else {
        console.log(this.resultado);
        this.correct = false;
        document.getElementById("overlay2").style.display = "block";
        console.log("Resultado Incorrecto");
      }*/
    }
  }

}
