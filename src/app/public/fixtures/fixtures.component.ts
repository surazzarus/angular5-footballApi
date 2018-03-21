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
  clubs;
  today;
  searchClub;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.clubs = JSON.parse(localStorage.getItem('clubs'));

    this.footballService.getFixtures()
      .subscribe((res: any) => {
        this.fixtures = res.fixtures;
        console.log(this.fixtures)

      });

    const currentTime = new Date();
    this.today = currentTime.setHours(0, 0, 0, 0);
  }
}
