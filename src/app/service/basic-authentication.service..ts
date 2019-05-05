import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  authenticate(username, password) {
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    } else {
      return false;
    }
  }

  executeAuthenticationService(username, password)  {
    //let basicAuthHeaderString = this.createBasicAuthenticationHttpMethod(username, password);
    let basicAuthenticationHeader = 'Basic ' +window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization : basicAuthenticationHeader
    })
    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,{headers: header}).pipe(
        map (
          data => {
            sessionStorage.setItem('authenticatedUser',username);
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


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return ! (user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}

export class AuthenticationBean {
  constructor(public message : string) {}
}
