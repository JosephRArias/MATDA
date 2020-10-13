import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatchService } from '../services/match.service';

@Injectable()
export class MatchGuard implements CanActivate {

    constructor(private router: Router, private matchService: MatchService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.matchService.state){
        console.log('Here');
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }
}
