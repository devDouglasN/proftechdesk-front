import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credentials) {
    return this.http.post(`${API_CONFIG.baseUrl}/auth/login`, creds);
  }

  successfulLogin(authToken: string, email: string) {
    localStorage.setItem('token', authToken)
    localStorage.setItem('email', email)
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if(token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout() {
    localStorage.clear();
  }

}
