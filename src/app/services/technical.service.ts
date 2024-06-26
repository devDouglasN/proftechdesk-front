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
    return this.http.get<Technical[]>(`${API_CONFIG.baseUrl}/technicals`);
  }

  findById(id: any): Observable<Technical> {
    return this.http.get<Technical>(`${API_CONFIG.baseUrl}/technicals/${id}`);
  }

  create(technical: Technical): Observable<Technical> {
    return this.http.post<Technical>(`${API_CONFIG.baseUrl}/technicals`, technical);
  }

  update(technical: Technical): Observable<Technical> {
    return this.http.put<Technical>(`${API_CONFIG.baseUrl}/technicals/${technical.id}`, technical);
  }

  delete(id: any): Observable<Technical>{
    return this.http.delete<Technical>(`${API_CONFIG.baseUrl}/technicals/${id}`);
  }
}
