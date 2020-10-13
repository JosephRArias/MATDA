import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchConfigurationComponent } from './match-configuration/match-configuration.component';
import { MatchGuard } from './guards/match.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'match-configuration', component: MatchConfigurationComponent, canActivate: [MatchGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
