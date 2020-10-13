import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit(): void {
  }

  onStart(state: boolean){
    this.matchService.setMatchState(state);
    this.router.navigate['/match-configuration'];
  }

}
