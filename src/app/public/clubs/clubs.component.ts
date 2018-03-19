import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {
  clubs: any;

  constructor() { }

  ngOnInit() {
    this.clubs = JSON.parse(localStorage.getItem('clubs'));
    console.log(this.clubs);
  }
}
