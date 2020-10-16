import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-match-in-process',
  templateUrl: './match-in-process.component.html',
  styleUrls: ['./match-in-process.component.scss']
})
export class MatchInProcessComponent implements OnInit {
  sign: Object;

  constructor(private router: Router, private fb: FirebaseService, private _changeDetectionRef : ChangeDetectorRef) { }

  ngOnInit(): void {
    if(this.sign == undefined){
      console.log(this.sign);
      setInterval(()=>{
        this.fb.getOperation().subscribe(res=>{
          if(this.sign == undefined){
            console.log('Estoy en el if');
            this.sign = res;
            this.router.navigate(['/operation', this.sign]);
          }
      });
      }, 5000);
    }

  }
  onLeave(){
    this.router.navigate(['/terminate-match']);
  }
}
