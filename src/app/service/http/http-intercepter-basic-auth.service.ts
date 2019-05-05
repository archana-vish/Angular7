import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService  implements HttpInterceptor{

  constructor() { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'in28minutes';
    let password = 'dummy';
    // default base64 encode
    let basicAuthenticationHeader = 'Basic ' +window.btoa(username + ':' + password);

    // Cannot directly change the request, so clone and overload the property to set the authorization header
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthenticationHeader
      }
    })

    return next.handle(request);
  }

  
}
