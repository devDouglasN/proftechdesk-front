import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { API_CONGIF } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credentials) {
    return this.http.post(`${API_CONGIF}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  sucessfulLogin(authToken: string) {
    localStorage.setItem('token', authToken)
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if(token !== null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout() {
    localStorage.clear();
  }

}
