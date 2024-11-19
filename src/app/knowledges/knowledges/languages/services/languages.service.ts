import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private apiUrl = 'https://back.alejo78912.com/spring/api/languages';
  token: string | undefined = environment.apiKey;

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': this.token!
    });
    return this.http.get<any[]>(this.apiUrl, {headers});
  }

}
