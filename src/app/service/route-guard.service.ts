import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authenticationService.isUserLoggedIn();
  }

  constructor(private authenticationService: HardcodedAuthenticationService) { }
}
