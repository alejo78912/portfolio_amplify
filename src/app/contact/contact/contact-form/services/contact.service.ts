// src/app/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://back.alejo78912.com/spring/api/contacts/contact'; 
  token: string | undefined = environment.apiKey;
  constructor(private http: HttpClient) {}

  submitContactForm(contact: { name: string; email: string; message: string }): Observable<any> {
    // Crear los encabezados con el token de autorización
    const headers = new HttpHeaders({
      'Authorization': this.token!
    });

    return this.http.post(this.apiUrl, contact, {headers});
  }
}
