import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = 'in28minutes';
  password : string = '';
  errormessage: string = 'Invalid credentials';
  invalidLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    console.log('Printing username :: ' + this.username);
    if (this.username === 'in28minutes' && this.password === 'dummy') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
