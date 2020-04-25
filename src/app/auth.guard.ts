import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import {AppService} from './app.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return this.checkAdminAccess(url);
  }

  checkAdminAccess(url: string): boolean {
    if (this.appService.isAdmin) { return true; }
    // Store the attempted URL for redirecting
    this.appService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
