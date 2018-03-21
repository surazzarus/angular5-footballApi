import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchClub'
})
export class SearchClubPipe implements PipeTransform {

  transform(clubs: any, searchClub: any): any {
    if (searchClub === undefined) {
      return clubs;
    }

    return clubs.filter( club => {
      return club.homeTeamName.toLowerCase().includes(searchClub.toLowerCase()) || club.awayTeamName.toLowerCase().includes(searchClub.toLowerCase());
    });
  }

}
