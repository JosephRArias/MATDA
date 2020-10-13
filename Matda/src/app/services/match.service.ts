import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  state = false;
  constructor() { }

  setMatchState(state: boolean){
    this.state = state;
  }
}
