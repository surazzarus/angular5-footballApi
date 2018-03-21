import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { ResultsComponent } from './results/results.component';
import { ClubsComponent } from './clubs/clubs.component';
import { PublicComponent } from './public.component';
import {FootballService} from '../core/services/football.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {SearchClubPipe} from '../shared/pipes/search-club.pipe';
import {ClubComponent} from './clubs/club/club.component';
import {FixtureComponent} from './fixtures/fixture/fixture.component';
import { ResultComponent } from './results/result/result.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    SharedModule // Import Shared Module that contains shared components that is used in Public Module
  ],
  declarations: [
    HomeComponent,
    FixturesComponent,
    FixtureComponent,
    ResultsComponent,
    ClubsComponent,
    ClubComponent,
    SearchClubPipe,
    ResultComponent
  ],
  providers: [FootballService],
  bootstrap: [PublicComponent]
})
export class PublicModule { }
