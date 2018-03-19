import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'X-Auth-Token': 'f9531ab600b24ed284a4da545708c810'
      }
    });
    return next.handle(request);
  }
}
