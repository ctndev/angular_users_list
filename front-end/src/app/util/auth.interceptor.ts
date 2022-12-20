import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  authRequest: any

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //intercept all requests to add apiKey on header
    this.authRequest = request.clone(
      {setHeaders:{'apiKey': `d5370c5c3367e73b30600210b571265a`,'Content-Type': 'application/json'}}
    )

    return next.handle(this.authRequest);
  }
}
