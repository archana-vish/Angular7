import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean/path-variable/${name}`);
    //return ("Hello world bean service");
  }
  
}
