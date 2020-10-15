import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-match-in-process',
  templateUrl: './match-in-process.component.html',
  styleUrls: ['./match-in-process.component.scss']
})
export class MatchInProcessComponent implements OnInit {
  sign: Object;

  constructor(private router: Router, private fb: FirebaseService) { }

  ngOnInit(): void {
    this.sign = this.fb.getOperation();
    if(this.sign){
      console.log('Llegue');
      this.router.navigate(['/operation'], {queryParams: {op: this.sign}});
    }
  }

  onLeave(){
    this.router.navigate(['/terminate-match']);
  }
}
