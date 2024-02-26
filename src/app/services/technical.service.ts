import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Technical } from '../models/technical';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Technical[]> {
    return this.http.get<Technical[]>(`${API_CONFIG.baseUrl}/technical`);
  }
}
