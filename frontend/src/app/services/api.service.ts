import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Contact form submission
  submitContact(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, formData);
  }

  // Add more API methods here as needed
  // For example:
  // getProjects(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/projects`);
  // }
} 