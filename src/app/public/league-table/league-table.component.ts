import { Component, OnInit } from '@angular/core';
import {FootballService} from '../../core/services/football.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {
  standings;
  leagueYear: string;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.footballService.getTable()
      .subscribe((res: any) => {
        console.log(res)
        this.standings = res.standing;
        this.leagueYear = res.leagueCaption;
      });
  }

}
