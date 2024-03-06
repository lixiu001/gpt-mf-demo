import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import {
//   DW_AUTH_TOKEN,
//   DwAuthService,
//   DwSystemConfigService,
//   DwUserService,
// } from '@webdpt/framework';

@Injectable()
export class AuthGuard implements CanActivate {
  // constructor( private loginService: DwAuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    console.log(1111);
    return true;
  }
}
