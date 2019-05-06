import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWoldBeanService()  {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean/path-variable/Angular');
    //return ("Hello world bean service");
  }

  executeHelloWoldBeanServiceWithPathVariable(name)  {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpMethod();
    // let header = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean/path-variable/${name}`
    // ,{headers: header}
    );
    //return ("Hello world bean service");
  }

  // createBasicAuthenticationHttpMethod() {
  //   let username = 'in28minutes';
  //   let password = 'dummy';
  //   // default base64 encode
  //   let basicAuthenticationHeader = 'Basic ' +window.btoa(username + ':' + password);
  //   return basicAuthenticationHeader;
  // }
  
}
