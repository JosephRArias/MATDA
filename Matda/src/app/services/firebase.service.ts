import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private url:string = "https://gomath-eb07a.firebaseio.com";
  sign: Object;
  RandomNum: number;
  data: any;
  type: any;
  constructor(private http : HttpClient,) { }

  getOperation(){
    this.http.get(`${this.url}/modo.json`).subscribe(res=>{
      this.sign = res;
      this.getExercisesLength(this.sign);
    });
    return this.http.get(`${this.url}/modo.json`);
    //return this.http.get(`${this.url}/modo`);
  }
  getExercisesLength(type: Object){
    this.http.get(`${this.url}/Ejercicios/${type}.json`).subscribe(error=>{
      this.RandomNum = Math.floor(Math.random()*(Object.keys(error).length)-0);
      /*this.http.get(`${this.url}/Ejercicios/${type}/${this.RandomNum}.json`).subscribe(res=>{
        console.log(res);
      });*/
    });
    /*console.log(this.data);
    return this.data;*/
  }
  getExercise(){
    return this.http.get(`${this.url}/Ejercicios/${this.sign}/${this.RandomNum}.json`);
  }
}
