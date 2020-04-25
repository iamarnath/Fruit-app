import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  loginUrl:string = 'assets/mockdata/login.json';
  isAdmin:boolean = false;
  redirectUrl: string;
  constructor(public http: HttpClient) { }
  doLogin() {
    return this.http.get(this.loginUrl);
  }
  checkAdmin():void{
    this.isAdmin = true;
  }

  uncheckAdmin(): void {
    this.isAdmin = false;
  }
}
