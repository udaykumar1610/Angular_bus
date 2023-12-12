
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  private apiUrl = 'http://localhost:3000/api/login'; // Adjust the URL to your backend

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
