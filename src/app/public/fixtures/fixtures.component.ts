import { Component, OnInit } from '@angular/core';
import {FootballService} from '../../core/services/football.service';
import {Fixture} from '../../core/models/fixture';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
  fixtures: Fixture[];
  loadingStatus: string;
  filteredFixtures: Fixture[];
  allFixtures: number;
  show = 20;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    // Initially the loading status is 'loading'
    this.loadingStatus = 'loading';

    this.footballService.getFixtures()
      .subscribe((res: any) => {
        this.fixtures = res.fixtures;

        // Change the loading status to active after all items are fetched
        this.loadingStatus = 'active';

        // Filter the items that are Not finished and postponed
        this.filteredFixtures = this.fixtures.filter(item => {
          return item.status !== 'FINISHED' && item.status !== 'POSTPONED';
        });
        // Get total fixtures
        this.allFixtures = this.filteredFixtures.length;
        console.log(this.filteredFixtures.length);
      });
  }

  loadMore() {
    this.show += 20;
  }
}
