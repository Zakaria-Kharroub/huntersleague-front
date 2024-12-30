import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cin: string;
  nationality: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8443/api/v2/auth';

  constructor(private http: HttpClient) { }

  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/register`, registerRequest);
  }
}
