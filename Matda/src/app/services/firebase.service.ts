import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private url:string = "https://gomath-eb07a.firebaseio.com";
  sign: Object;
  constructor(private http : HttpClient) { }

  getOperation(){
    this.http.get(`${this.url}/modo.json`).subscribe(res=>{
      this.sign = res;
    });
    return this.sign;
    //return this.http.get(`${this.url}/modo`);
  }
}
