import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service.';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService  implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    // let password = 'dummy';
    // default base64 encode
    // let basicAuthenticationHeader = 'Basic ' +window.btoa(username + ':' + password);
    let basicAuthenticationHeader = this.basicAuthenticationService.getAuthenticatedToken();

    if (basicAuthenticationHeader && username) {

      // Cannot directly change the request, so clone and overload the property to set the authorization header
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthenticationHeader
        }
      })
    }

    return next.handle(request);
  }

  
}
