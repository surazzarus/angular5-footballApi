import { Component, OnInit } from '@angular/core';
import {FootballService} from '../../core/services/football.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {
  standings;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.footballService.getTable()
      .subscribe(res => {
        console.log(res.standing)
        this.standings = res.standing;
      })
  }

}
