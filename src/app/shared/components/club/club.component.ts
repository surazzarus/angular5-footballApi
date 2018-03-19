import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  @Input() club;

  constructor() { }

  ngOnInit() {
  }
}
