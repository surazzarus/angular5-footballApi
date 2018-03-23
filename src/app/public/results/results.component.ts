import { Component, OnInit } from '@angular/core';
import {FootballService} from '../../core/services/football.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  fixtures;
  loadingStatus: string;
  searchClub: string;
  updatedFixture: any;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.loadingStatus = 'loading';
    this.footballService.getFixtures()
      .subscribe((res: any) => {
        console.log(res.fixtures)
        this.fixtures = res.fixtures;
        this.loadingStatus = 'active';
      });
  }
}
