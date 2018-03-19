import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicComponent} from './public/public.component';
import {HomeComponent} from './public/home/home.component';
import {FixturesComponent} from './public/fixtures/fixtures.component';
import {ResultsComponent} from './public/results/results.component';
import {ClubsComponent} from './public/clubs/clubs.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'fixtures', component: FixturesComponent},
      {path: 'results', component: ResultsComponent},
      {path: 'clubs', component: ClubsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
