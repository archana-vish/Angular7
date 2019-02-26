import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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
  


  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log('Printing username :: ' + this.username);
    if (this.username === 'in28minutes' && this.password === 'dummy') {
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username]);
      // route it to welcome page
    } else {
      this.invalidLogin = true;
    }
  }
}
