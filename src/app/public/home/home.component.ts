import { Component, OnInit } from '@angular/core';
import {FootballService} from '../../core/services/football.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.footballService.getClubs()
      .subscribe((res: any) => {
        localStorage.setItem('clubs', JSON.stringify(res.teams));
      });
  }
}
