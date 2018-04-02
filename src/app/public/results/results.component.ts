import { Component, OnInit } from '@angular/core';
import {FootballService} from '../../core/services/football.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  fixtures;
  loadingStatus: string;
  searchClub: string;
  filteredResult: any;
  updatedFixture: any;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.loadingStatus = 'loading';
    this.footballService.getFixtures()
      .subscribe((res: any) => {
        console.log(res.fixtures)
        this.fixtures = res.fixtures;
        this.loadingStatus = 'active';

        // Filtering all the fixtures that has the status of 'FINISHED'
        this.filteredResult = this.fixtures.filter(item => {
          return item.status === 'FINISHED';
        });

        // Sort by latest using lodash
        this.updatedFixture = _.orderBy(this.filteredResult, ['date'], ['desc']);
      });
  }
}
