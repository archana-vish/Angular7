import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //private userLoggedIn : boolean = false;

  constructor(private authenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.userLoggedIn = this.authenticationService.isUserLoggedIn();
  }

}
