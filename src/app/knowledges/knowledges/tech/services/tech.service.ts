import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  private apiUrl = 'http://localhost:8000/api/techs'; 
  token: string | undefined = environment.apiKey;

  constructor(private http: HttpClient) {}

  

  getTechnologies(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': this.token!
    });
    return this.http.get<any[]>(this.apiUrl, {headers});
  }
}
