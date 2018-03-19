import { Injectable } from '@angular/core';
import {Constants} from '../../shared/constants/constants';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FootballService {
  protected url: string;

  constructor(
    public http: HttpClient) {
    this.url = Constants.HOME_URL;
  }

  getClubs() {
    return this.http.get(this.url + '/teams');
  }

  getFixtures() {
    return this.http.get(this.url + '/fixtures');
  }

}
