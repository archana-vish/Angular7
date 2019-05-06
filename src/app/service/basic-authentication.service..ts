import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'authenticatedToken';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  executeAuthenticationService(username, password)  {
    //let basicAuthHeaderString = this.createBasicAuthenticationHttpMethod(username, password);
    let basicAuthenticationHeader = 'Basic ' +window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization : basicAuthenticationHeader
    })
    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,{headers: header}).pipe(
        map (
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,basicAuthenticationHeader);
            return data;
          }
        )
      );
    //return ("Hello world bean service");
  }

  createBasicAuthenticationHttpMethod(username, password) {
    // let username = 'in28minutes';
    // let password = 'dummy';
    // default base64 encode
    let basicAuthenticationHeader = 'Basic ' +window.btoa(username + ':' + password);
    return basicAuthenticationHeader;
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return ! (user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean {
  constructor(public message : string) {}
}
