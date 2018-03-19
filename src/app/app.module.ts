import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {PublicModule} from './public/public.module';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import {PublicComponent} from './public/public.component';

/* 3rd party library */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FootballService} from './core/services/football.service';
import {TokenInterceptor} from './core/auth/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PublicModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
