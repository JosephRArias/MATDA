import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchConfigurationComponent } from './match-configuration/match-configuration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatchGuard } from './guards/match.guard';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { MatchInProcessComponent } from './match-in-process/match-in-process.component';
import { TerminateMatchComponent } from './terminate-match/terminate-match.component';
import { OperationScreenComponent } from './operation-screen/operation-screen.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchConfigurationComponent,
    MatchInProcessComponent,
    TerminateMatchComponent,
    OperationScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzSpaceModule,
    NzRadioModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, MatchGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
