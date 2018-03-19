import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClubComponent } from './components/club/club.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ClubComponent,
    CommonModule,
    FormsModule
  ],
  declarations: [NavbarComponent, FooterComponent, ClubComponent]
})
export class SharedModule { }
