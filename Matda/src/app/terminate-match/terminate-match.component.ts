import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminate-match',
  templateUrl: './terminate-match.component.html',
  styleUrls: ['./terminate-match.component.scss']
})
export class TerminateMatchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(route: string){
    if(route == 'process'){
      this.router.navigate(['/match-process']);
    }else{
      this.router.navigate(['/']);
    }
  }
}
