import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = 'in28minutes';
  password : string = '';
  errormessage: string = 'Invalid credentials';
  validLogin: boolean = true;
  


  constructor(private router: Router, private authenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.validLogin = this.authenticationService.authenticate(this.username, this.password);

    if (this.validLogin) {
      this.router.navigate(['/welcome', this.username]);
    } 
  }
}
