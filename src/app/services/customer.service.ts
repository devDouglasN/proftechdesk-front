import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../models/customer';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  findById(id: any): Observable<Customer> {
    return this.http.get<Customer>(`${API_CONFIG.baseUrl}/customers/${id}`);
  }

  constructor(private http: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_CONFIG.baseUrl}/customers`);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${API_CONFIG.baseUrl}/customers`, customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_CONFIG.baseUrl}/tecnicos/${customer.id}`, customer);
  }

  delete(customer: Customer): Observable<Customer>{
    return this.http.delete<Customer>(`${API_CONFIG.baseUrl}/customer/${customer.id}`);
  }
}
