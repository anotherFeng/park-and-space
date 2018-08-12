import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import 'rxjs/Rx';
const jwt = new JwtHelperService();

class DecodedToken {
  exp: number = 0;
  username: string = '';
}

@Injectable()
export class AuthService {
  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('ngn_meta')) || new DecodedToken;
  }

  private saveToken(token: string): string {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('ngn_auth', token);
    localStorage.setItem('ngn_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  private getExpirate() {
    const time = moment.unix(this.decodedToken.exp);
    return time
  }

  public register(userData: any): Observable<any> {
    return this.http.post('api/v1/users/register', userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post('api/v1/users/auth', userData).map(
      (token: string) => this.saveToken(token));
  }

  public logout() {
    localStorage.removeItem('ngn_auth');
    localStorage.removeItem('ngn_meta');
    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    const isAuth =  moment().isBefore(this.getExpirate());
    return isAuth
  };

  public getUsername(): string {
    return this.decodedToken.username;
  }
}