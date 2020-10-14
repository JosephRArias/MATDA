import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-in-process',
  templateUrl: './match-in-process.component.html',
  styleUrls: ['./match-in-process.component.scss']
})
export class MatchInProcessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLeave(){
    this.router.navigate(['/terminate-match']);
  }
}
