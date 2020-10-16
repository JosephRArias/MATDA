import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchConfigurationComponent } from './match-configuration/match-configuration.component';
import { MatchGuard } from './guards/match.guard';
import { MatchInProcessComponent } from './match-in-process/match-in-process.component';
import { TerminateMatchComponent } from './terminate-match/terminate-match.component';
import { OperationScreenComponent } from './operation-screen/operation-screen.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'match-configuration', component: MatchConfigurationComponent, canActivate: [MatchGuard]},
  {path: 'match-process', component: MatchInProcessComponent, canActivate: [MatchGuard]},
  {path: 'terminate-match', component: TerminateMatchComponent, canActivate: [MatchGuard]},
  {path: 'operation/:op', component: OperationScreenComponent, canActivate: [MatchGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
