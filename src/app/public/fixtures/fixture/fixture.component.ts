import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {

  @Input() fixture;

  constructor() { }

  ngOnInit() {
  }

}
