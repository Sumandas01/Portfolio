import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/api/contact`;

  constructor(private http: HttpClient) { }

  submitContact(formData: ContactForm): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${this.apiUrl}/submit`, formData);
  }
} 